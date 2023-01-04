import { Nanny, html } from 'https://cdn.skypack.dev/nanny-state';

const View = state => html`<h1>Hello ${state.name}</h1><input oninput=${state.changeName}>`

const changeName = event => Update({ name: event.target.value })

const State = {
  name: "Nanny State",
  changeName,
  View
}

const Update = Nanny(State)