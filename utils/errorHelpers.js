exports.getErrorMessage = (err) => {
    let errorMessage = err.errors;
    if (err.errors) {
        errorMessage = Object.values(err.errors)[0].message;
    }
    return errorMessage;
};