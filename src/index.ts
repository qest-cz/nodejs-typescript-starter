const main = async () => {
    const a = {
        b: {
            c: {
                test: 'test',
            },
        },
    };
    console.log(a?.b);

    return;
};

main();
