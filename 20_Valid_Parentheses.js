var isValid = function(s) {
    var stack = [];

    for (let i in s) {
        if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
            stack.push(s[i])
        }
        if (s[i] == ")" || s[i] == "}" || s[i] == "]") {
            if (stack[stack.length - 1] == "(" && s[i] == ")") {
                stack.pop()
            }
            else {
                if (stack[stack.length - 1] == "[" && s[i] == "]") {
                    stack.pop()
                }
                else {
                    if (stack[stack.length - 1] == "{" && s[i] == "}") {
                        stack.pop()
                    }
                    else {
                        stack.push(s[i])
                    }
                }
            }
        }
    }
    if (stack.length === 0) {
        return true;
    }
    else {
        return false;
    }
};
Console
