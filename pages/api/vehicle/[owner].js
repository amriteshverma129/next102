import data from '../../../data.json'

export default (req, res) => {
    const owner=req.query.owner
    const obj=data.filter((item)=>{
      if(item.owner===owner)
       return true
    })
    res.status(200).json(obj)
  }