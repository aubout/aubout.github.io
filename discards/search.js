const idx = new FlexSearch({
    doc: {
        id: 'id',
        field: [
            'title',
            'content'
        ]
    }
});
idx.add(SearchIndex);

// ...
idx.search("your query", 10);