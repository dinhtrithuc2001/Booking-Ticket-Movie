 // -------------------------- Validation Login and Register --------------------------
const kiemTraRong = (value, error, name, title) => {
    if (value !== "") {
        error[name] = ''
        return true;
    }
    error[name] = `${title} không được rỗng !!`;
    return false
}
const kiemTraDinhDang = (value, error, name, title, regex, mess) => {
    if (value.match(regex)) {
        error[name] = ''    
        return true;
    }
    error[name] = `${title} ${mess} !!`;
    return false
}

const kiemTraDoDai = (value, error, name, title, min, max) => {
    if (value.length >= min && value.length <= max) {
        error[name] = ''    
        return true;
    }
    
    if(min == max){
        error[name] = `${title} phải đủ ${min} ký tự !!`;
    }
    else {
        error[name] = `${title} phải từ ${min} đến ${max} ký tự !!`;
    }
    
    return false
}


export {kiemTraRong, kiemTraDinhDang, kiemTraDoDai}