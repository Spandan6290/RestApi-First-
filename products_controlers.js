const Product = require("../models/product_model");

const getAllProducts = async (req, res)=>{
    const {company,name,feature,sort,select} = req.query;
    const query_obj = {}
    if(company){
        query_obj.company = company
    }

    if(name){
        query_obj.name = { $regex: name , $options: "i" }
    }

    if(feature){
        query_obj.feature = feature
    }

    let apidata = Product.find(query_obj);
    // console.log(apidata)
    if(sort){
        let sortfix = sort.replace(",", " ")
        query_obj.sort = sortfix
        apidata = apidata.sort(sortfix)
    }
    // console.log(query_obj);

    // select = name,company;
    if(select){
        // let selectfix = select.replace(",", " ")
        let selectfix = select.split(",").join(" ");
        // query_obj.sort = selectfix
        apidata = apidata.select(selectfix)
    }

    let page = Number(req.query.page)||1

    let pageSize = Number(req.query.pageSize)||5

    let skip = (page-1)*pageSize

    apidata = apidata.skip(skip).limit(pageSize)
    const products = await apidata
    res.status(200).json({products,totalResults:products.length});
}

const getAllProductsTesting = async (req, res)=>{
    const myproducts = await Product.find(req.query).skip(5)
    // console.log(req.query);
    res.status(200).json({myproducts,totalResults:myproducts.length});
}

const getAllProductsAddtocart = async (req, res)=>{
    res.status(200).json({msg:"I am getAllProductsAddtocart"});
}

module.exports={getAllProducts,getAllProductsTesting,getAllProductsAddtocart};