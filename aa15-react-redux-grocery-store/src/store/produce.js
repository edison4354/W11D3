import produceData from '../mockData/produce.json'
const POPULATE = 'produce/POPULATE'

export const populateProduce = () =>{
    return {
        type: POPULATE,
        produce: produceData
    }
}

export default function produceReducer(state = {}, action) {
    switch (action.type) {
        case POPULATE:
            const res = {};
            for (let i=0; i<action.produce.length; i++ ){
                res[i+1]=action.produce[i];
            }
            // console.log(res);
            return res;
      default:
        return state;
    }
}

