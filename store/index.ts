interface State {
  breadcrumbs: Breadcrumb[];
}

export const mutations = {
  set(state: State, breadcrumbs: Breadcrumb[]): void {
    state.breadcrumbs = breadcrumbs;
  },
  push(state: State, breadcrumb: Breadcrumb): void {
    state.breadcrumbs.push(breadcrumb);
  },
  splice(state: State, find: string): void {
    const index = state.breadcrumbs.findIndex((breadcrumb) => {
      return breadcrumb.text === find;
    });

    if (index > -1) {
      state.breadcrumbs.splice(index, 1);
    }
  },
  replace(state: State, payload: { find: string; replace: Breadcrumb }): void {
    const index = state.breadcrumbs.findIndex((breadcrumb) => {
      return breadcrumb.text === payload.find;
    });

    if (index > -1) {
      state.breadcrumbs.splice(index, 1, payload.replace);
    }
  },
  empty(state: State): void {
    state.breadcrumbs = [];
  },
};

export const getters = {
  breadcrumbs: (state: State): Breadcrumb[] => state.breadcrumbs,
};

export const state = (): State => ({
  breadcrumbs: [],
});
