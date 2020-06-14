export const addProductMiddleware = (req, res, next) => {
  const { name, description } = req.body;

  if(!name || !name.trim()){
    return res.status(400).json({
      status: 400,
      error: "Product name is required"
    });
  }else if(!isNaN(parseInt(name))){
    return res.status(400).json({
      status: 400,
      error: "Product name must be a string"
    });
  }else if(!description || !description.trim()){
    return res.status(400).json({
      status: 400,
      error: "Product description is required"
    });
  }else if(!isNaN(parseInt(description))){
    return res.status(400).json({
      status: 400,
      error: "Product description must be a string"
    });
  }
  next();
}
