import { toast } from "react-toastify";
import { Id } from "react-toastify";

export const loading = (msg: string) => {
  return toast.loading(msg)
}

export const dismiss = (id: Id) => {
  toast.dismiss(id)
}

export const error = (id: Id, msg: string) => {
  toast.update(id, {
    render: msg,
    type: "error",
    isLoading: false,
    autoClose: 2000,
  });
}

export const warn = (id: Id, msg: string) => {
  toast.update(id, {
    render: msg,
    type: "warning",
    isLoading: false,
    autoClose: 2000,
  });
}

export const success = (id: Id, msg: string) => {
  toast.update(id, {
    render: msg,
    type: "success",
    isLoading: false,
    autoClose: 2000,
  });
}

export const instantSucess = (msg: string) => {
  toast.success(msg, {autoClose: 1500})
}

export const instantWarn = (msg: string) => {
  toast.warn(msg, {autoClose: 1500})
}

export const instantError = (msg: string) => {
  toast.error(msg, {autoClose: 1500})
}