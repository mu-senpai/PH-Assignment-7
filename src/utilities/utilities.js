import { toast } from 'react-toastify';

const getEmail = id => {
    if (document.getElementById(id).value) {
        return document.getElementById(id).value;
    } else {
        toast.error("Please enter your email.", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
    }
}

const vacantInput = id => {
    document.getElementById(id).value = '';
}

export { getEmail, vacantInput };