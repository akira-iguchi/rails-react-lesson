import axios from 'axios';
import { lineFoods, lineFoodsReplace } from '../urls/index'

export const postLineFoods =(params) => {
  return axios.post(lineFoods,
    {
      food_id: params.foodId,
      count: params.count,
    }
  )
  .then(res => {
    return res.data
  })
  .catch((e) => { throw e; })
};

export const replaceLineFoods = (params) => {
  return axios.put(lineFoodsReplace,
    {
      food_id: params.foodId,
      count: params.count,
    }
  )
  .then(res => {
    return res.data
  })
  .catch((e) => { throw e; })
};

export const fetchLineFoods = () => {
  // throwを入れるとエラーになる（その後の処理は止まり、catchに行く）
  return axios.get(lineFoods)
  .then(res => {
    return res.data
  })
  .catch((e) => { throw e; }) // Orders.jsxのcatchへ行く
};

// throwやcatchをしている箇所を見かけたら注意して動きをイメージ