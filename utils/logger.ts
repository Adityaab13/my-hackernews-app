const isDevelopment = process.env.NODE_ENV !== 'production';

export const logError = (error: Error, info: string) => {
  if (isDevelopment) {
    console.error(error, info);
  } else {
    // In a real application, you would send this to an external logging service
    console.error("Error logged:", error, info);
  }
};

export const logInfo = (message: string) => {
  if (isDevelopment) {
    console.info(message);
  } else {
    // In a real application, you would send this to an external logging service
    console.info("Info logged:", message);
  }
};
