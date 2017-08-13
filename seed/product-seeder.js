var Product = require('../models/product');

var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/shopping_cart");

var products = [
    new Product({
        imagePath:"http://www.ledwatchstop.com/store/images/Oulm_Quad_CoolWatch_1-(1).jpg",
        title:"Four Track",
        description:"Et magna noster prompta quo, vis ut aeterno antiopam. Et illud melius delenit vel, an mei debitis fuisset prodesset. Nonumy noluisse qui id. Mel similique disputationi id, an solet mucius platonem sea, labores oporteat te vel. Eu vis vocibus invenire, et scripta nominati his. Vis ne nullam accusam voluptatibus, dolorem lobortis qui no, numquam definitionem usu cu.",
        price:349.99
    }),
    new Product({
        imagePath:"http://www.funcage.com/blog/wp-content/uploads/2012/08/35-Of-Most-Cool-Watches-May-Not-Have-Seen-Before-024.jpg",
        title:"Titan",
        description:"Minim conclusionemque quo ne, quo facilisis percipitur no, dico vocibus laboramus eos in. Qui ea quem meis commune, mei eu detraxit expetendis. Pro cibo facete eleifend ex. Duo imperdiet percipitur no, ignota nemore in vim. In vix vitae verterem, in cum convenire rationibus, partem corpora ocurreret et has.",
        price:839.99
    }),    
    new Product({
        imagePath:"http://www.damngeeky.com/wp-content/uploads/2013/08/Unwerk-EMC-fully-mechanical-wristwatch.jpg",
        title:"Asus",
        description:"Novum forensibus vis an. Qui stet mollis accusata ex, et vim nobis partiendo deseruisse. Cu pro inermis referrentur, ne usu duis corpora perpetua. Ex viris fabulas similique nec, eu per vide ancillae platonem. Ius ferri hendrerit adipiscing ei.",
        price:949.99
    }),    
    new Product({
        imagePath:"http://www.national.ro/wp-content/uploads/2012/04/urwerk.jpg",
        title:"Ducati",
        description:"Repudiare concludaturque duo eu, pro ne omittam electram prodesset, mea dolor definitionem te. Viris appetere pri ex, ridens oblique ius at, est at labore inciderint. Ex vidisse vocibus vim, id duo numquam percipit urbanitas. Omnis quaeque similique ea ius, fabellas incorrupte eam te.",
        price:259.99
    }),    
    new Product({
        imagePath:"https://s-media-cache-ak0.pinimg.com/736x/eb/4e/58/eb4e58f17f0f597f619fcd2c12810a9d--men-luxury-watches-fancy-watches.jpg",
        title:"Transmission",
        description:"Sed eu lorem dicit senserit, eum ut viderer explicari. At ipsum vituperata dissentias eum, duo habemus persequeris ex, vis no prima commune neglegentur. Reque petentium eu eos, eam nobis principes splendide ea.",
        price:659.99
    }),    
    new Product({
        imagePath:"http://www.bluemaize.net/im/watches/cool-pocket-watch-1.jpg",
        title:"Pocket",
        description:"Quaeque postulant prodesset ei sed, mea no suas petentium. Ex vivendum temporibus reprehendunt eam, quis nibh vel eu. Est inermis persequeris philosophia ut, modo constituam in eum. Reque accumsan disputationi ne est. No modus invidunt mel, eu vel iusto electram.",
        price:449.99
    }),
];

Product.insertMany(products).then((result)=>{
    mongoose.disconnect();
});
