import {createStore} from "vuex";

export const store = createStore({
  state() {
    return {
      tasks: [],
    }
  },
  getters: {
    getActiveCount(state) {
      return state.tasks.length;
    },
    getTasks(state) {
      return state.tasks;
    },
  },
  mutations: {
    createNewTask(state, payload) {
      state.tasks.push(payload)
    },
    changeStatusVuex(state, {taskOLD, newStatus}) {
      state.tasks.map((task) => {
        console.log(task, taskOLD)
          if (task.id === taskOLD.id) {
            return {...taskOLD, status: newStatus}
          } else {
            return task
          }
        }
      )
    }
  },
  actions: {
    createNewTaskAsync(context, payload) {
      payload.forEach((item) => {
        context.commit('createNewTask', item)
      })
    }
  }
})