const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();



// ⬇︎ is telling express we want to use pug(jade) for dynamic templating.  Not all dynamic templates come pre set up with express but pug is.
// app.set('view engine', 'pug');
// ⬇︎ for pug this is not needed but it is for temples that are not inately part of express this would tell express what folders we want rendering the vies.  along with the above import of the template.
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded({extended: true}));
// ⬇︎ serves the public file statically to allow for use of css style sheets and can be used for many other things.
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.status(404).render('404', {pageTitle: 'Page not Found', pageTitle: 'Page not Found'});
});

app.listen(3000);
