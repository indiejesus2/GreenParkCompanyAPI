class AddSavedJobAndSavedApplicantToApplicants < ActiveRecord::Migration[6.1]
  def change
    add_column :applicants, :savedJob, :boolean
    add_column :applicants, :savedApplicant, :boolean
  end
end
