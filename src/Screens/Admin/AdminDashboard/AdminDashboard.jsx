import { } from "react-bootstrap";
import $ from "jquery";
import { useEffect } from "react";

function AdminDashboard() {
    useEffect(() => {
        // Add the event listener when the component is mounted
        $("i.bx.bx-menu-alt-right").on("click", function () {
            $(".side-menu").toggleClass("main");
        });
        return () => {
            $("i.bx.bx-menu-alt-right").off("click");
        };
    }, []); // Empty dependency array means this effect runs once when the component mounts

    return (
        <>
            {/* <div className="admin-dashbord" > */}
            <div class="side-menu">
                <div class="brand-name">
                    <i class="bx bx-notepad" aria-hidden="true"></i>
                    <h1>Diyun</h1>
                    <i class="bx bx-menu-alt-right test" aria-hidden="true"></i>
                </div>

                <ul class="menu-item">
                    <li><a href="/admin-dashboard"><i class="bx bx-user" aria-hidden="true"></i><span>All User</span></a></li>
                    <li><a href="customer-active.html"><i class="bx bx-conversation" aria-hidden="true"></i><span>All Debate</span></a></li>
                    <li><a href="invoice.html"><i class="bx bx-tag" aria-hidden="true"></i><span>All Tag</span></a></li>
                    <li><a href="Portfolio.html"><i class="bx bx-donate-heart" aria-hidden="true"></i><span>Total Contribution</span></a></li>
                </ul>
            </div>
            {/* </div> */}
        </>
    );
}

export default AdminDashboard;