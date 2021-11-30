export const Validator = {
    stringValid: (str) => {
        if (!str) {
            return false
        }
        if (String(str).trim().length == 0) {
            return false
        }
        return true
    }
}