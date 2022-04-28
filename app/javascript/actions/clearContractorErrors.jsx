export const clearContractorErrors = () => {
    return (dispatch) => {
        dispatch({ type: 'CLEAR_CONTRACTOR_ERRORS'})
    }
}