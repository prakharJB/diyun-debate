import React, { useEffect, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Header from "../Layouts/Header";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function UserDashboard() {
  const { verification_token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (verification_token) {
      fetchPortfolio();
    } else if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  const fetchPortfolio = async () => {
     debugger;
    try {
      const url = `https://laradebate.jmbliss.com/api/verify-email/${verification_token}`;
      const response = await axios.get(url);

      console.log(response);
      // if (response?.data?.status === "success") {
      //   toast.success(response?.data?.message);
      //   const token = {
      //     token: response?.data?.token,
      //   };
      //   localStorage.setItem("token", JSON.stringify(token));
      // } else {
      //   toast.error(response?.data?.message);
      //   navigate("/");
      // }
    } catch (err) {
      console.log(err);
      navigate("/");
    }
  };
  return (
    <>
      <Header />
      <section>
        <Container>
          <Row>
            <Col>
              <h1>
                Kialo.com’s terms of service and privacy policy are currently
                being updated to reflect that it is GDPR and CCPA compliant.
                Kialo.com is a free, non-revenue generating site. It has no ads,
                nor is user data being abused or resold. User data is used to
                improve the site, e.g. to see which functions are frequently
                used, to display user content, and to make the site user
                friendly by identifying which claims users have already seen.
                Please contact us if you have any questions. September 08, 2017
                KIALO TERMS OF SERVICE Welcome to Kialo! Thank you for joining
                the debates on our site. We’re glad you’re here. These Terms of
                Service (“Terms”) apply to your use of Kialo’s website and
                services. Please read them carefully because by using Kialo, you
                agree to be bound by these Terms. If you’re using Kialo on
                behalf of an organization, you agree to these Terms on behalf of
                that organization. Content You’ll find a couple of types of
                content on our service. Your Content. Your contributions to
                Kialo are yours and yours alone. By posting content to Kialo,
                you agree to give us a perpetual and irrevocable license to use,
                copy, display, distribute, and store your content. You also
                agree to freely license your published content to all Kialo
                users on the same terms. Your unpublished content will never be
                shown to anyone other than the Kialo users you authorize to see
                it. You’re solely responsible for the content you post to Kialo
                and assume all risks associated with it, including intellectual
                property or other legal claims. By posting content on Kialo, you
                represent that you have the necessary rights to that material,
                and that doing so doesn’t conflict with other agreements you’ve
                made. We don’t pre-screen anyone’s content, but we have the
                right—though no duty—to review and remove your contributions to
                Kialo. We assume no liability for content that you or others
                post on our service. Kialo’s Content and Brand Features. Kialo
                is protected by copyright, trademark, and other laws. Kialo
                gives you a personal, worldwide, royalty-free, non-assignable,
                and non-exclusive license to use the software we provide you to
                use our service. This license is for the sole purpose of
                enabling you to use Kialo as permitted by these Terms. If you
                violate these Terms, we may terminate this license. You may not
                use any of Kialo’s trademarks, logos, domain names, or other
                distinctive brand features without our permission, except as
                otherwise permitted by law. Community Guidelines Kialo strives
                to provide a great service. To that end, we ask that you respect
                these rules, and we reserve the right to terminate your account
                if you don’t follow them. Don’t use Kialo in a manner that
                violates any laws, regulations, ordinances, or directives. Don’t
                use Kialo contrary to our policies. Don’t use Kialo to do
                anything threatening, abusive, harassing, defamatory, tortious,
                obscene, profane, or invasive of another person’s privacy. Don’t
                interfere with the proper functioning of any software, hardware,
                or equipment on Kialo. Don’t engage in any conduct that inhibits
                anyone else’s use or enjoyment of Kialo, or which may harm Kialo
                or our users. Don’t impersonate others on Kialo in a manner that
                is intended to or actually does confuse, deceive, or mislead
                other people. Crawling Kialo and Exporting Discussions Crawling
                Kialo is allowed in accordance with our robots instructions, and
                you may use our export functionality to download debates for
                private use. Please don’t use other means to monitor or copy any
                material on Kialo, either manually or through automated means
                (i.e., scraping), without prior written consent. If you’d like
                to request consent, please contact support@kialo.com. Our Rights
                We’re always working to improve Kialo and make our forum better,
                so we reserve some rights. We may change our services from time
                to time, and modify, suspend, or terminate user accounts that
                don’t comply with our terms. Kialo is not liable for any damages
                as a result of these actions. Other Sites and Services Kialo
                contains links to websites and other services that we neither
                own nor control. We don’t endorse or assume responsibility for
                any third-party sites, information, materials, products, or
                services. Privacy Our Privacy Policy governs our collection and
                use of your personal information. Please review those
                provisions, too. Security
              </h1>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default UserDashboard;
