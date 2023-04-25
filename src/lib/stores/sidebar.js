import { writable } from 'svelte/store'

const store = writable({
    collapsed: false,
});

const sidebarStore = {
    subscribe: store.subscribe,

    toggleCollapse: () => {
        store.update(items => {
            items.collapsed = !items.collapsed;

            return items;
        })
    }
}

export default sidebarStore;