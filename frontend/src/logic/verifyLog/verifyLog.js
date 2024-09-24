export const verifyLog = ()=> {
    let result = sessionStorage.getItem('userState');
    if (result) {
        return true;
    }
}