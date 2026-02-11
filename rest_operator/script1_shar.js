function collectArgs(...args) {
    const uniqueArgs = [];

    for (let i = 0; i < args.length; i++) {
        // Check if current argument is already present
        if (!uniqueArgs.includes(args[i])) {
            uniqueArgs.push(args[i]);
        }
    }

    return {
        count: args.length,
        uniqueArgs: uniqueArgs
    };
}
const result=collectArgs(1,2,2,3,3,4)
console.log(result)