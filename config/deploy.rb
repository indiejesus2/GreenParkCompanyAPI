# config valid for current version and patch releases of Capistrano
lock "~> 3.16.0"
server '144.126.218.31', port: 22, roles: [:web, :app, :db], primary: true

set :repo_url, "git@github.com:indiejesus2/GreenParkCompanyAPI.git"
set :application, "BluCollar"
set :user, 'deploy'
set :puma_threads, [4, 16]
set :puma_workers, 0

set :pty,             true
set :use_sudo,        false
set :stage,           :production
set :deploy_via,      :remote_cache
set :deploy_to,       "/home/#{fetch(:user)}/apps/#{fetch(:application)}"
set :puma_bind,       "unix://#{shared_path}/tmp/sockets/#{fetch(:application)}-puma.sock"
set :puma_state,      "#{shared_path}/tmp/pids/puma.state"
set :puma_pid,        "#{shared_path}/tmp/pids/puma.pid"
set :puma_access_log, "#{release_path}/log/puma.error.log"
set :puma_error_log,  "#{release_path}/log/puma.access.log"
set :ssh_options,     { forward_agent: true, user: fetch(:user), keys: %w(~/.ssh/id_rsa.pub) }
set :puma_preload_app, true
set :puma_worker_timeout, nil
set :puma_init_active_record, true  # Change to false when not using ActiveRecord
set :branch,        :main
set :rvm_ruby_string, '3.0.3'
set :nvm_type, :user # or :system, depends on your nvm setup
set :nvm_node, 'v8.5.0'
set :nvm_map_bins, %w{node npm yarn}
set :yarn_target_path, -> { release_path.join('client') } #
set :yarn_flags, '--production --silent --no-progress' # default
set :yarn_roles, :all # default
set :yarn_env_variables, {}

# Defaults:
# set :scm,           :git
# set :format,        :pretty
# set :log_level,     :debug
# set :keep_releases, 5

## Linked Files & Directories (Default None):
# set :linked_files, %w{config/database.yml config/webpacker.yml}
# set :linked_dirs,  %w{bin log tmp/pids tmp/cache tmp/sockets vendor/bundle public/system .bundle public/packs node_modules bin/webpack}
# set :default_env, { 'NODE_ENV' => 'production' }

append :linked_files, "config/master.key" 
# append :linked_files, ".env"

namespace :puma do
    desc 'Create Directories for Puma Pids and Socket'
    task :make_dirs do
      on roles(:app) do
        execute "mkdir #{shared_path}/tmp/sockets -p"
        execute "mkdir #{shared_path}/tmp/pids -p"
      end
    end
  
    before :start, :make_dirs
  end
  
  namespace :deploy do
    desc "Make sure local git is in sync with remote."
    task :check_revision do
      on roles(:app) do
        unless `git rev-parse HEAD` == `git rev-parse origin/main`
          puts "WARNING: HEAD is not the same as origin/main"
          puts "Run `git push` to sync changes."
          exit
        end
      end
    end
  
    desc 'Initial Deploy'
    task :initial do
      on roles(:app) do
        before 'deploy:restart', 'puma:start'
        invoke 'deploy'
      end
    end
  
    desc 'Restart application'
    task :restart do
      on roles(:app), in: :sequence, wait: 5 do
        invoke 'puma:restart'
      end
    end

    desc 'Upload YAML files.'
    task :upload_yml do
      on roles(:app) do
        execute "mkdir #{shared_path}/config -p"
        upload! StringIO.new(File.read("config/database.yml")), "#{shared_path}/config/database.yml"
        upload! StringIO.new(File.read("config/webpacker.yml")), "#{shared_path}/config/webpacker.yml"
        upload! StringIO.new(File.read("config/storage.yml")), "#{shared_path}/config/storage.yml"
      end
    end

    namespace :check do
      before :linked_files, :set_master_key do
        on roles(:app), in: :sequence, wait: 10 do
          unless test("[ -f #{shared_path}/config/master.key ]")
            upload! 'config/master.key', "#{shared_path}/config/master.key"
            upload! '.env', "#{shared_path}/.env"
            # upload! 'config/credentials/production.key', "#{shared_path}/config/credentials/production.key"
          end
        end
      end
    end
  
    before :starting,     :check_revision
    after  :finishing,    :compile_assets
    after  :finishing,    :check
    after  :finishing,    :cleanup
    after  :finishing,    :restart
  end
  
  # ps aux | grep puma    # Get puma pid
  # kill -s SIGUSR2 pid   # Restart puma
  # kill -s SIGTERM pid   # Stop puma
# Default branch is :master
# ask :branch, `git rev-parse --abbrev-ref HEAD`.chomp

# Default deploy_to directory is /var/www/my_app_name
# set :deploy_to, "/var/www/my_app_name"

# Default value for :format is :airbrussh.
# set :format, :airbrussh

# You can configure the Airbrussh format using :format_options.
# These are the defaults.
# set :format_options, command_output: true, log_file: "log/capistrano.log", color: :auto, truncate: :auto

# Default value for :pty is false
# set :pty, true

# Default value for :linked_files is []
# append :linked_files, "config/database.yml"

# Default value for linked_dirs is []
# append :linked_dirs, "log", "tmp/pids", "tmp/cache", "tmp/sockets", "public/system"

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }

# Default value for local_user is ENV['USER']
# set :local_user, -> { `git config user.name`.chomp }

# Default value for keep_releases is 5
# set :keep_releases, 5

# Uncomment the following to require manually verifying the host key before first deploy.
# set :ssh_options, verify_host_key: :secure
