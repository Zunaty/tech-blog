const { Post } = require('../models');

const postData = [
    {
        title: 'First Post',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis posuere nisl, nec cursus ligula rhoncus id. Nam viverra dui ac orci ornare, quis viverra odio cursus. Duis viverra, neque eu feugiat dignissim, ligula turpis tempor justo, ut dapibus felis turpis id dui. Integer at ipsum ultricies, elementum eros et, consequat mauris. Nulla et lacinia dui. Sed maximus, eros eget feugiat varius, nulla nunc feugiat erat, in imperdiet tellus erat ut diam. Nunc condimentum quis turpis non aliquet. Fusce id placerat turpis. Proin semper ullamcorper pellentesque.',
        date: '',
        userId: 1
    },
    {
        title: 'Second Post',
        body: 'Duis ut nibh non erat condimentum tincidunt. Duis viverra convallis augue, in maximus mauris dictum non. Nunc quis magna odio. Integer pulvinar at augue et sollicitudin. Maecenas elementum purus diam, et pellentesque purus bibendum quis. Aenean fringilla pulvinar justo nec semper. Curabitur convallis, justo eget finibus auctor, diam massa pharetra ligula, non porttitor nulla dui in magna. Sed vel purus tellus. Maecenas at metus ut sem bibendum mollis vitae nec nisl. Duis imperdiet aliquet tortor sit amet blandit. Mauris leo ante, ornare sed eros et, semper euismod erat. Donec non massa ornare, cursus ex eget, malesuada ante.',
        date: '',
        userId: 1
    },
    {
        title: 'Third Post',
        body: 'Nam posuere elementum erat id pretium. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi in finibus tortor. Mauris at leo posuere, elementum lectus quis, scelerisque sem. Etiam a ipsum lacus. Morbi blandit ipsum sed tortor sagittis maximus. Curabitur risus leo, dignissim ac felis ut, sagittis tristique ligula. Mauris mi nisl, luctus eu massa vel, accumsan finibus justo. Nulla sagittis nibh nisi, ultrices laoreet mauris tempus quis. Sed dignissim, nisi vitae accumsan lobortis, lectus erat cursus erat, sed fermentum purus erat quis eros.',
        date: '',
        userId: 2
    },
    {
        title: 'Fourth Post',
        body: 'Fusce nec sem eget risus sodales facilisis non ac odio. Suspendisse eu turpis tincidunt dui lacinia finibus mattis ut quam. Aenean malesuada accumsan aliquam. Aliquam ut consequat lectus, et molestie nulla. Maecenas venenatis eu erat ut rhoncus. Nulla porta tellus ut tellus accumsan, ut rhoncus est ullamcorper. Nam turpis neque, sollicitudin id vestibulum nec, luctus id eros. Nulla vel velit ut mi bibendum tempus. Curabitur sit amet mauris dignissim nulla pellentesque lacinia eget et lacus. Nulla bibendum ultrices commodo. Praesent sagittis ex nibh, ac venenatis diam lacinia eu. Integer venenatis lacus at est finibus placerat. Etiam rhoncus tristique risus vitae faucibus. Pellentesque quis cursus ex, in accumsan nulla. Sed tristique, nunc vitae ultrices semper, massa urna feugiat massa, id efficitur metus neque porta mi. Vivamus eget eleifend nulla, id consectetur lectus.',
        date: '',
        userId: 3
    },
    {
        title: 'Fifth Post',
        body: 'Sed vel nisl fringilla, pulvinar orci vitae, fermentum nunc. Proin at odio vel turpis dignissim interdum. Integer turpis nisi, suscipit eu nisi vitae, porttitor tempor metus. Sed vel nisi est. Fusce id sem viverra, placerat elit in, luctus massa. In hac habitasse platea dictumst. Suspendisse nisl mauris, tincidunt sed ante sollicitudin, elementum tincidunt metus. Phasellus vestibulum mauris vulputate consectetur fermentum. Nam posuere ante sit amet nulla finibus condimentum. Proin efficitur urna odio, quis ornare eros placerat vel. Donec eleifend quam justo, nec euismod nulla accumsan sit amet. Pellentesque sit amet interdum urna, sed varius ante. Morbi ullamcorper feugiat commodo. Cras lobortis urna at nisi commodo, ut consequat sem gravida.',
        date: '',
        userId: 4
    },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;