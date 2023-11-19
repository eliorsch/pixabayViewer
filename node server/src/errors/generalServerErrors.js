// errors/generalServerErrors.js
// handling proper response if some internal server error accure in the procces

/**
 * express app error handler for any internal error
 */
export default function generalServerErrors(err, req, res, next)  {
    // Log the error
    console.error(err);
  
    res.status(500).json({ error: 'Internal Server Error' });
  }
  