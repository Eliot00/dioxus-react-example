use dioxus::prelude::*;

fn main() {
    dioxus::desktop::launch(app);
}

fn app(cx: Scope) -> Element {
    cx.render(rsx!(
        div {
            div { "hello world!" }
            div { id: "react-component" }
            script { src: "../react-components/dist/bundle.js" }
        }
    ))
}
