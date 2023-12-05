const useReactive = () => {
  let currentEffect = null;
  const subscribers = new Map();
  /*
  {
    obj1: {
      prop1: [],
      prop2: [],
    },
    obj2: {
      prop1: [],
      prop2: [],
    }
  }
   */

  const track = (target, prop) => {
    if (currentEffect === null) return;

    if (!subscribers.has(target)) {
      subscribers.set(target, new Map());
    }

    const targetPropSubscriberMap = subscribers.get(target);

    if (!targetPropSubscriberMap.has(prop)) {
      targetPropSubscriberMap.set(prop, new Set());
    }

    targetPropSubscriberMap.get(prop).add(currentEffect);
  };

  const trigger = (target, prop) => {
    if (!subscribers.has(target)) return;
    const targetPropSubscriberMap = subscribers.get(target);
    if (!targetPropSubscriberMap.has(prop)) return;

    const effects = targetPropSubscriberMap.get(prop);
    effects.forEach(effect => effect());
  };

  const reactive = (obj) => {
    return new Proxy(obj, {
      get(target, prop) {
        track(target, prop);
        return target[prop];
      },
      set(target, prop, value) {
        if (target[prop] === value) return;

        target[prop] = value;
        trigger(target, prop);
      },
    })
  }
  
  const watchEffect = (func) => {
    const effect = () => {
      currentEffect = effect;
      func();
      currentEffect = null;
    };

    effect();
  }

  const computed = (func) => {
    let _value;
    const computedRef = {
      get value() {
        track(computedRef, 'value');
        return _value;
      },
      set value (newVal) {
        if (newVal === _value) return;
        _value = newVal;
        trigger(computedRef, 'value');
      },
    };

    const effect = () => {
      currentEffect = effect;
      computedRef.value = func();
      currentEffect = null;
    };

    effect();

    return computedRef;
  }

  return {
    reactive,
    watchEffect,
    computed,
  };
}

const { reactive, computed, watchEffect } = useReactive();

const state = reactive({
  data: [0, 1, 2],
  winner: 1,
  todos: [
    'buy brush',
    'take homeworks',
    'shower and bath',
  ],
});

const setupOnDOMInteractive = () => {
  const newTodoInput = document.querySelector('#newTodo');
  const addTodoButton = document.querySelector('#addTodo');
  const todoList = document.querySelector('#todoList');
  const todos = computed(() => {
    return state.todos.map(item => `<li>${item}</li>`).join('');
  });

  const render = () => {
    todoList.innerHTML = todos.value;
  }

  watchEffect(render);

  addTodoButton.onclick = () => {
    if (newTodoInput.value === '') return;

    state.todos = [...state.todos, newTodoInput.value];
    newTodoInput.value = '';
  }
}

setupOnDOMInteractive();
