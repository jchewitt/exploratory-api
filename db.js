const mongoose = require('mongoose');
mongoose.connect('mongodb://nodeuser:nodepass1@ds055699.mlab.com:55699/exploratory_db', { useMongoClient: true });