let intro=introJs();

intro.setOptions({
    steps:
        [
            {
                intro:"Welcome to tribe shop",
            },
            {
                element:'.pull-left',
                intro:'Change language related to your region.,'
            },
        ]
})


intro.start();