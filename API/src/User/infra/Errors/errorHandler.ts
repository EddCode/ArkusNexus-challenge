import httpCode from "../../../shared/infraestructure/httpCode"

const INTERNAL_SERVER_ERROR = {
    status: httpCode.INTERNAL_SERVER_ERROR.status,
    message: httpCode.INTERNAL_SERVER_ERROR.message
  }

export const CreatedErrorHandler = (error: Error): {status: number, message: string} => {
  console.log(error)
  const errors = {
    "User already exist": {
      status: httpCode.CONFLICT.status,
      message: "User already exist"
    },
    "Invalid password": {
      status: httpCode.BAD_REQUEST.status,
      message: "Invalid password"
    },
    "Password is required": {
      status: httpCode.BAD_REQUEST.status,
      message: "Password is required"
    },
    "Invalid name": {
      status: httpCode.BAD_REQUEST.status,
      message: "Invalid name"
    },
    "Name is required": {
      status: httpCode.BAD_REQUEST.status,
      message: "Name is required"
    },
    "Invalid email": {
      status: httpCode.BAD_REQUEST.status,
      message: "Invalid email"
    },
    "Email is required": {
      status: httpCode.BAD_REQUEST.status,
      message: "Email is required"
    },
    "Invalid role": {
      status: httpCode.BAD_REQUEST.status,
      message: "Invalid role"
    },
    "Role is required": {
      status: httpCode.BAD_REQUEST.status,
      message: "Role is required"
    },
  }

  return errors[error.message] || INTERNAL_SERVER_ERROR
}

export const GetErrorHandler = (error: Error): {status: number, message: string} => {
  const errors = {
    "User not found": {
      status: httpCode.NOT_FOUND.status,
      message: "User not found"
    },
    "Id is required": {
      status: httpCode.BAD_REQUEST.status,
      message: "Invalid id"
    },
  }
  return errors[error.message] || INTERNAL_SERVER_ERROR
}

export const UpdateErrorHandler = (error: Error): {status: number, message: string} => {
  const errors = {
    "User not found": {
      status: httpCode.NOT_FOUND.status,
      message: "User not found"
    },
    "Unauthorized": {
      status: httpCode.UNAUTHORIZED.status,
      message: "You are not authorized to update this user"
    },
    "You cannot update your email": {
      status: httpCode.BAD_REQUEST.status,
      message: "You cannot update your own email"
    },
    "Unauthorized to update resume, skills and english level": {
      status: httpCode.UNAUTHORIZED.status,
      message: "You are not authorized to update resume, skills and english level"
    }
  }
  return errors[error.message] || INTERNAL_SERVER_ERROR
}
