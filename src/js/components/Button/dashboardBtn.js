import Component from "../abstractComponent.js";

export default class DashboardBtn extends Component {

    render() {
        const dashboardBtn = document.createElement('button');
        dashboardBtn.setAttribute('class', 'dashboard_btn');
        dashboardBtn.type = 'submit';
        dashboardBtn.innerText = this.props.dashboardTxt;

        if(this.props.dashboardTxt === '수정') {
            dashboardBtn.classList.add('modify');
        } else {
            dashboardBtn.classList.add('delete');
        }

        return dashboardBtn;
    }
}