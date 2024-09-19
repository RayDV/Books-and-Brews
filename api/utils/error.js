/**
 * Custom error handler function to create error objects with specific status codes and messages.
 * @param {number} statusCode - The HTTP status code for the error.
 * @param {string} message - The error message.
 * @returns {Error} - The custom error object with the specified status code and message.
 */
export const errorHandler = (statusCode, message) => {
    // Create a new Error object
    const error = new Error();
    
    // Assign the provided status code to the error object
    error.statusCode = statusCode;
    
    // Assign the provided message to the error object
    error.message = message;
    
    // Return the custom error object
    return error;
};