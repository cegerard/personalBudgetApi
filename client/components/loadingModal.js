Vue.component('loading-modal', {
    template: `
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-img-wrapper">
                <img src="../assets/loading2.gif"/>
            </div>
        </div>
    </transition>
    `
});