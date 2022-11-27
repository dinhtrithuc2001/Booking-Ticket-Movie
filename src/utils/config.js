import Swal from 'sweetalert2'

const getLocalStorage = (key) => {
    try {
        if(JSON.parse(localStorage.getItem(key))){
            return JSON.parse(localStorage.getItem(key))
        }
    } catch (error) {
        // Trường hợp người dùng sửa localStorage dẫn đến sai lỗi JSON.parse
        removeLocalStorage(key)
        return null
    }
}

const setLocalStorage = (key, value) => {
    localStorage.setItem(key,JSON.stringify(value))
}

const removeLocalStorage = (key) => {
    localStorage.removeItem(key)
}

// ------------------- 

const SwalConfig = (title, icon, showConfirmButton, timer) => {
    return Swal.fire({
        icon,
        title,
        showConfirmButton,
        timer: timer? timer : 1500,
        position: 'center',
        confirmButtonColor: '#f97316',
    })
}

export {getLocalStorage, setLocalStorage, removeLocalStorage, SwalConfig}