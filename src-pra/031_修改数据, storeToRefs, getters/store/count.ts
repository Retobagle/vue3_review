import {defineStore} from 'pinia'

export const useCountStore = defineStore('count',{
  state(){
    return {
      sum:6,
      school:'zhenzhong',
      address:'关埠'
    }
  },
  // 动作方法，用于相应组件中的“动作”
  actions:{
    increment(value:number){
      this.sum += value  //this是当前的store
    }
  },
  getters:{
    bigSum:state => state.sum*10,
    upperSchool():string{
      return this.school.toUpperCase();
    }
  }
})