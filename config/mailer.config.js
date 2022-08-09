const nodemailer = require("nodemailer"); //Libreria de correo

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: 'mallorcaymadridinironhack@gmail.com',
    pass: 'agyukezmheqngyar',
    //Cambiar2006
  },
})

module.exports.sendBuyEmail = (user) => {
  transporter
    .sendMail({
      from: 'FiverIronhack<mallorcaymadridinironhack@gmail.com>',
      to: user.userId.email,
      subject: 'Realizada compra FivverIronhack',
      html: `
          <!doctype html>
          <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
            xmlns:o="urn:schemas-microsoft-com:office:office">

          <head>
            <!-- NAME: BOUTIQUE -->
            <!--[if gte mso 15]>
              <xml>
                <o:OfficeDocumentSettings>
                <o:AllowPNG/>
                <o:PixelsPerInch>96</o:PixelsPerInch>
                </o:OfficeDocumentSettings>
              </xml>
              <![endif]-->
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>*|MC:SUBJECT|*</title>

            <style type="text/css">
              p {
                margin: 10px 0;
                padding: 0;
              }

              table {
                border-collapse: collapse;
              }

              h1,
              h2,
              h3,
              h4,
              h5,
              h6 {
                display: block;
                margin: 0;
                padding: 0;
              }

              img,
              a img {
                border: 0;
                height: auto;
                outline: none;
                text-decoration: none;
              }

              body,
              #bodyTable,
              #bodyCell {
                height: 100%;
                margin: 0;
                padding: 0;
                width: 100%;
              }

              .mcnPreviewText {
                display: none !important;
              }

              #outlook a {
                padding: 0;
              }

              img {
                -ms-interpolation-mode: bicubic;
              }

              table {
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
              }

              .ReadMsgBody {
                width: 100%;
              }

              .ExternalClass {
                width: 100%;
              }

              p,
              a,
              li,
              td,
              blockquote {
                mso-line-height-rule: exactly;
              }

              a[href^=tel],
              a[href^=sms] {
                color: inherit;
                cursor: default;
                text-decoration: none;
              }

              p,
              a,
              li,
              td,
              body,
              table,
              blockquote {
                -ms-text-size-adjust: 100%;
                -webkit-text-size-adjust: 100%;
              }

              .ExternalClass,
              .ExternalClass p,
              .ExternalClass td,
              .ExternalClass div,
              .ExternalClass span,
              .ExternalClass font {
                line-height: 100%;
              }

              a[x-apple-data-detectors] {
                color: inherit !important;
                text-decoration: none !important;
                font-size: inherit !important;
                font-family: inherit !important;
                font-weight: inherit !important;
                line-height: inherit !important;
              }

              a.mcnButton {
                display: block;
              }

              .mcnImage,
              .mcnRetinaImage {
                vertical-align: bottom;
              }

              .mcnTextContent {
                word-break: break-word;
              }

              .mcnTextContent img {
                height: auto !important;
              }

              .mcnDividerBlock {
                table-layout: fixed !important;
              }

              body,
              #bodyTable,
              #templateFooter {
                /*@editable*/
                background-color: #FFFFFF;
              }

              #bodyCell {
                /*@editable*/
                border-top: 0;
              }

              #templateContainer {
                /*@editable*/
                border: 0;
              }

              h1 {
                /*@editable*/
                color: #FFFFFF !important;
                display: block;
                /*@editable*/
                font-family: Helvetica;
                /*@editable*/
                font-size: 40px;
                /*@editable*/
                font-style: normal;
                /*@editable*/
                font-weight: bold;
                /*@editable*/
                line-height: 100%;
                /*@editable*/
                letter-spacing: -1px;
                margin: 0;
                /*@editable*/
                text-align: center;
              }

              h2 {
                /*@editable*/
                color: #000000 !important;
                display: block;
                /*@editable*/
                font-family: Helvetica;
                /*@editable*/
                font-size: 36px;
                /*@editable*/
                font-style: normal;
                /*@editable*/
                font-weight: bold;
                /*@editable*/
                line-height: 125%;
                letter-spacing: -.75px;
                margin: 0;
                text-align: center;
              }

              h3 {
                /*@editable*/
                color: #606060 !important;
                display: block;
                /*@editable*/
                font-family: Helvetica;
                /*@editable*/
                font-size: 18px;
                /*@editable*/
                font-style: normal;
                /*@editable*/
                font-weight: bold;
                /*@editable*/
                line-height: 125%;
                /*@editable*/
                letter-spacing: -.5px;
                margin: 0;
                /*@editable*/
                text-align: left;
              }

              h4 {
                /*@editable*/
                color: #808080 !important;
                display: block;
                /*@editable*/
                font-family: Helvetica;
                /*@editable*/
                font-size: 16px;
                /*@editable*/
                font-style: normal;
                /*@editable*/
                font-weight: bold;
                /*@editable*/
                line-height: 125%;
                /*@editable*/
                letter-spacing: normal;
                margin: 0;
                /*@editable*/
                text-align: left;
              }

              #templatePreheader {
                /*@editable*/
                background-color: #FFFFFF;
                /*@editable*/
                border-top: 0;
                /*@editable*/
                border-bottom: 1px solid #000000;
              }

              .preheaderContainer .mcnTextContent,
              .preheaderContainer .mcnTextContent p {
                /*@editable*/
                color: #000000;
                /*@editable*/
                font-family: Helvetica;
                /*@editable*/
                font-size: 11px;
                /*@editable*/
                line-height: 125%;
                /*@editable*/
                text-align: left;
              }

              .preheaderContainer .mcnTextContent a {
                /*@editable*/
                color: #000000;
                /*@editable*/
                font-weight: normal;
                /*@editable*/
                text-decoration: underline;
              }

              #templateHeader {
                /*@editable*/
                background-color: #FFFFFF;
                /*@editable*/
                border-top: 0;
                /*@editable*/
                border-bottom: 0;
              }

              .headerContainer .mcnTextContent,
              .headerContainer .mcnTextContent p {
                /*@editable*/
                color: #000000;
                /*@editable*/
                font-family: Helvetica;
                /*@editable*/
                font-size: 16px;
                /*@editable*/
                line-height: 150%;
                /*@editable*/
                text-align: center;
              }

              .headerContainer .mcnTextContent a {
                /*@editable*/
                color: #000000;
                /*@editable*/
                font-weight: normal;
                /*@editable*/
                text-decoration: underline;
              }

              #templateBody {
                /*@editable*/
                background-color: #FFFFFF;
                /*@editable*/
                border-top: 0;
                /*@editable*/
                border-bottom: 0;
              }

              .bodyContainer .mcnTextContent,
              .bodyContainer .mcnTextContent p {
                /*@editable*/
                color: #000000;
                /*@editable*/
                font-family: Helvetica;
                /*@editable*/
                font-size: 16px;
                /*@editable*/
                line-height: 150%;
                /*@editable*/
                text-align: center;
              }

              .bodyContainer .mcnTextContent a {
                /*@editable*/
                color: #000000;
                /*@editable*/
                font-weight: normal;
                /*@editable*/
                text-decoration: underline;
              }

              #templateColumns {
                /*@editable*/
                background-color: #FFFFFF;
                /*@editable*/
                border-top: 0;
                /*@editable*/
                border-bottom: 0;
              }

              .leftColumnContainer .mcnTextContent,
              .leftColumnContainer .mcnTextContent p {
                /*@editable*/
                color: #000000;
                /*@editable*/
                font-family: Helvetica;
                /*@editable*/
                font-size: 14px;
                /*@editable*/
                line-height: 150%;
                /*@editable*/
                text-align: center;
              }

              .leftColumnContainer .mcnTextContent a {
                /*@editable*/
                color: #000000;
                /*@editable*/
                font-weight: normal;
                /*@editable*/
                text-decoration: underline;
              }

              .rightColumnContainer .mcnTextContent,
              .rightColumnContainer .mcnTextContent p {
                /*@editable*/
                color: #000000;
                /*@editable*/
                font-family: Helvetica;
                /*@editable*/
                font-size: 14px;
                /*@editable*/
                line-height: 150%;
                /*@editable*/
                text-align: center;
              }

              .rightColumnContainer .mcnTextContent a {
                /*@editable*/
                color: #000000;
                /*@editable*/
                font-weight: normal;
                /*@editable*/
                text-decoration: underline;
              }

              #templateFooter {
                /*@editable*/
                border-top: 0;
                /*@editable*/
                border-bottom: 0;
              }

              .footerContainer .mcnTextContent,
              .footerContainer .mcnTextContent p {
                /*@editable*/
                color: #000000;
                /*@editable*/
                font-family: Helvetica;
                /*@editable*/
                font-size: 11px;
                /*@editable*/
                line-height: 125%;
                /*@editable*/
                text-align: center;
              }

              .footerContainer .mcnTextContent a {
                /*@editable*/
                color: #000000;
                /*@editable*/
                font-weight: normal;
                /*@editable*/
                text-decoration: underline;
              }

              @media only screen and (max-width: 480px) {

                body,
                table,
                td,
                p,
                a,
                li,
                blockquote {
                  -webkit-text-size-adjust: none !important;
                }

              }

              @media only screen and (max-width: 480px) {
                body {
                  width: 100% !important;
                  min-width: 100% !important;
                }

              }

              @media only screen and (max-width: 480px) {
                #bodyCell {
                  padding-top: 10px !important;
                }

              }

              @media only screen and (max-width: 480px) {
                .templateContainer {
                  max-width: 600px !important;
                  width: 100% !important;
                }

              }

              @media only screen and (max-width: 480px) {
                .columnsContainer {
                  display: block !important;
                  max-width: 600px !important;
                  padding-bottom: 18px !important;
                  padding-left: 0 !important;
                  width: 100% !important;
                }

              }

              @media only screen and (max-width: 480px) {
                .mcnRetinaImage {
                  max-width: 100% !important;
                }

              }

              @media only screen and (max-width: 480px) {
                .mcnImage {
                  height: auto !important;
                  width: 100% !important;
                }

              }

              @media only screen and (max-width: 480px) {

                .mcnCartContainer,
                .mcnCaptionTopContent,
                .mcnRecContentContainer,
                .mcnCaptionBottomContent,
                .mcnTextContentContainer,
                .mcnBoxedTextContentContainer,
                .mcnImageGroupContentContainer,
                .mcnCaptionLeftTextContentContainer,
                .mcnCaptionRightTextContentContainer,
                .mcnCaptionLeftImageContentContainer,
                .mcnCaptionRightImageContentContainer,
                .mcnImageCardLeftTextContentContainer,
                .mcnImageCardRightTextContentContainer,
                .mcnImageCardLeftImageContentContainer,
                .mcnImageCardRightImageContentContainer {
                  max-width: 100% !important;
                  width: 100% !important;
                }

              }

              @media only screen and (max-width: 480px) {
                .mcnBoxedTextContentContainer {
                  min-width: 100% !important;
                }

              }

              @media only screen and (max-width: 480px) {
                .mcnImageGroupContent {
                  padding: 9px !important;
                }

              }

              @media only screen and (max-width: 480px) {

                .mcnCaptionLeftContentOuter .mcnTextContent,
                .mcnCaptionRightContentOuter .mcnTextContent {
                  padding-top: 9px !important;
                }

              }

              @media only screen and (max-width: 480px) {

                .mcnImageCardTopImageContent,
                .mcnCaptionBottomContent:last-child .mcnCaptionBottomImageContent,
                .mcnCaptionBlockInner .mcnCaptionTopContent:last-child .mcnTextContent {
                  padding-top: 18px !important;
                }

              }

              @media only screen and (max-width: 480px) {
                .mcnImageCardBottomImageContent {
                  padding-bottom: 9px !important;
                }

              }

              @media only screen and (max-width: 480px) {
                .mcnImageGroupBlockInner {
                  padding-top: 0 !important;
                  padding-bottom: 0 !important;
                }

              }

              @media only screen and (max-width: 480px) {
                .mcnImageGroupBlockOuter {
                  padding-top: 9px !important;
                  padding-bottom: 9px !important;
                }

              }

              @media only screen and (max-width: 480px) {

                .mcnTextContent,
                .mcnBoxedTextContentColumn {
                  padding-right: 18px !important;
                  padding-left: 18px !important;
                }

              }

              @media only screen and (max-width: 480px) {

                .mcnImageCardLeftImageContent,
                .mcnImageCardRightImageContent {
                  padding-right: 18px !important;
                  padding-bottom: 0 !important;
                  padding-left: 18px !important;
                }

              }

              @media only screen and (max-width: 480px) {
                .mcpreview-image-uploader {
                  display: none !important;
                  width: 100% !important;
                }

              }

              @media only screen and (max-width: 480px) {

                /*
            @tab Mobile Styles
            @section heading 1
            @tip Make the first-level headings larger in size for better readability on small screens.
            */
                h1 {
                  /*@editable*/
                  font-size: 24px !important;
                  /*@editable*/
                  line-height: 125% !important;
                }

              }

              @media only screen and (max-width: 480px) {

                /*
            @tab Mobile Styles
            @section heading 2
            @tip Make the second-level headings larger in size for better readability on small screens.
            */
                h2 {
                  /*@editable*/
                  font-size: 20px !important;
                  /*@editable*/
                  line-height: 125% !important;
                }

              }

              @media only screen and (max-width: 480px) {

                /*
            @tab Mobile Styles
            @section heading 3
            @tip Make the third-level headings larger in size for better readability on small screens.
            */
                h3 {
                  /*@editable*/
                  font-size: 18px !important;
                  /*@editable*/
                  line-height: 125% !important;
                }

              }

              @media only screen and (max-width: 480px) {

                h4 {
                  /*@editable*/
                  font-size: 16px !important;
                  /*@editable*/
                  line-height: 125% !important;
                }

              }

              @media only screen and (max-width: 480px) {

                .mcnBoxedTextContentContainer .mcnTextContent,
                .mcnBoxedTextContentContainer .mcnTextContent p {
                  /*@editable*/
                  font-size: 18px !important;
                  /*@editable*/
                  line-height: 125% !important;
                }

              }

              @media only screen and (max-width: 480px) {

                #templatePreheader {
                  /*@editable*/
                  display: block !important;
                }

              }

              @media only screen and (max-width: 480px) {

                .preheaderContainer .mcnTextContent,
                .preheaderContainer .mcnTextContent p {
                  /*@editable*/
                  font-size: 14px !important;
                  /*@editable*/
                  line-height: 115% !important;
                }

              }

              @media only screen and (max-width: 480px) {

                .headerContainer .mcnTextContent,
                .headerContainer .mcnTextContent p {
                  /*@editable*/
                  font-size: 18px !important;
                  /*@editable*/
                  line-height: 125% !important;
                }

              }

              @media only screen and (max-width: 480px) {

                .bodyContainer .mcnTextContent,
                .bodyContainer .mcnTextContent p {
                  /*@editable*/
                  font-size: 18px !important;
                  /*@editable*/
                  line-height: 125% !important;
                }

              }

              @media only screen and (max-width: 480px) {

                .leftColumnContainer .mcnTextContent,
                .leftColumnContainer .mcnTextContent p {
                  /*@editable*/
                  font-size: 18px !important;
                  /*@editable*/
                  line-height: 125% !important;
                }

              }

              @media only screen and (max-width: 480px) {

                .rightColumnContainer .mcnTextContent,
                .rightColumnContainer .mcnTextContent p {
                  /*@editable*/
                  font-size: 18px !important;
                  /*@editable*/
                  line-height: 125% !important;
                }

              }

              @media only screen and (max-width: 480px) {

                .footerContainer .mcnTextContent,
                .footerContainer .mcnTextContent p {
                  /*@editable*/
                  font-size: 14px !important;
                  /*@editable*/
                  line-height: 115% !important;
                }

              }
            </style>
          </head>

          <body leftmargin="0" marginwidth="0" topmargin="0" marginheight="0" offset="0">
            <!--*|IF:MC_PREVIEW_TEXT|*-->
            <!--[if !gte mso 9]><!----><span class="mcnPreviewText"
              style="display:none; font-size:0px; line-height:0px; max-height:0px; max-width:0px; opacity:0; overflow:hidden; visibility:hidden; mso-hide:all;">*|MC_PREVIEW_TEXT|*</span>
            <!--<![endif]-->
            <!--*|END:IF|*-->
            <center>
              <table align="center" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="bodyTable">
                <tr>
                  <td align="center" valign="top" id="bodyCell">
                    <!-- BEGIN TEMPLATE // -->
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td align="center" valign="top">
                          <!-- BEGIN PREHEADER // -->
                          <table border="0" cellpadding="0" cellspacing="0" width="100%" id="templatePreheader">
                            <tr>
                              <td align="center" valign="top">
                                <table border="0" cellpadding="0" cellspacing="0" width="600"
                                  class="templateContainer">
                                  <tr>
                                    <td valign="top" class="preheaderContainer"
                                      style="padding-top:10px; padding-bottom:10px;"></td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                          <!-- // END PREHEADER -->
                        </td>
                      </tr>
                      <tr>
                        <td align="center" valign="top">
                          <!-- BEGIN HEADER // -->
                          <table border="0" cellpadding="0" cellspacing="0" width="100%" id="templateHeader">
                            <tr>
                              <td align="center" valign="top">
                                <table border="0" cellpadding="0" cellspacing="0" width="600"
                                  class="templateContainer">
                                  <tr>
                                    <td valign="top" class="headerContainer"
                                      style="padding-top:10px; padding-bottom:10px;">
                                      <table border="0" cellpadding="0" cellspacing="0" width="100%"
                                        class="mcnImageBlock" style="min-width:100%;">
                                        <tbody class="mcnImageBlockOuter">
                                          <tr>
                                            <td valign="top" style="padding:9px"
                                              class="mcnImageBlockInner">
                                              <table align="left" width="100%" border="0"
                                                cellpadding="0" cellspacing="0"
                                                class="mcnImageContentContainer"
                                                style="min-width:100%;">
                                                <tbody>
                                                  <tr>
                                                    <td class="mcnImageContent"
                                                      valign="top"
                                                      style="padding-right: 9px; padding-left: 9px; padding-top: 0; padding-bottom: 0; text-align:center;">

                                                      <a href="https://i.ibb.co/pW3KXr0/fiverrhack.png"
                                                        title="" class=""
                                                        target="_blank">
                                                        <img align="center" alt=""
                                                          src="https://mcusercontent.com/284e3524ae569ffcba5d16ab5/images/7448907e-b857-1ca5-22b8-3db44f349663.png"
                                                          width="495"
                                                          style="max-width:500px; padding-bottom: 0; display: inline !important; vertical-align: bottom;"
                                                          class="mcnImage">
                                                      </a>

                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                          <!-- // END HEADER -->
                        </td>
                      </tr>
                      <tr>
                        <td align="center" valign="top">
                          <!-- BEGIN BODY // -->
                          <table border="0" cellpadding="0" cellspacing="0" width="100%" id="templateBody">
                            <tr>
                              <td align="center" valign="top">
                                <table border="0" cellpadding="0" cellspacing="0" width="600"
                                  class="templateContainer">
                                  <tr>
                                    <td valign="top" class="bodyContainer"
                                      style="padding-top:10px; padding-bottom:10px;">
                                      <table border="0" cellpadding="0" cellspacing="0" width="100%"
                                        class="mcnTextBlock" style="min-width:100%;">
                                        <tbody class="mcnTextBlockOuter">
                                          <tr>
                                            <td valign="top" class="mcnTextBlockInner"
                                              style="padding-top:9px;">
                                              <!--[if mso]>
                  <table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
                  <tr>
                  <![endif]-->

                                              <!--[if mso]>
                  <td valign="top" width="600" style="width:600px;">
                  <![endif]-->
                                              <table align="left" border="0" cellpadding="0"
                                                cellspacing="0"
                                                style="max-width:100%; min-width:100%;"
                                                width="100%"
                                                class="mcnTextContentContainer">
                                                <tbody>
                                                  <tr>

                                                    <td valign="top"
                                                      class="mcnTextContent"
                                                      style="padding-top:0; padding-right:18px; padding-bottom:9px; padding-left:18px;">

                                                      <div
                                                        style="text-align: center;">
                                                        <br>
                                                        Enhorabuena
                                                        ${user.userId.name}, ha
                                                        finalizado su compra con
                                                        exito<br>
                                                        Pedido Nº: ${user._id}</div>

                                                      <div
                                                        style="text-align: center;">
                                                        Realizado el ${user.date}
                                                      </div>

                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                              <!--[if mso]>
                  </td>
                  <![endif]-->

                                              <!--[if mso]>
                  </tr>
                  </table>
                  <![endif]-->
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <table border="0" cellpadding="0" cellspacing="0" width="100%"
                                        class="mcnButtonBlock" style="min-width:100%;">
                                        <tbody class="mcnButtonBlockOuter">
                                          <tr>
                                            <td style="padding-top:0; padding-right:18px; padding-bottom:18px; padding-left:18px;"
                                              valign="top" align="center"
                                              class="mcnButtonBlockInner">
                                              <table border="0" cellpadding="0"
                                                cellspacing="0"
                                                class="mcnButtonContentContainer"
                                                style="border-collapse: separate !important;border-radius: 3px;background-color: #000000;">
                                                <tbody>
                                                  <tr>
                                                    <td align="center" valign="middle"
                                                      class="mcnButtonContent"
                                                      style="font-family: Arial; font-size: 18px; padding: 14px;">
                                                      <a class="mcnButton "
                                                        title="SHOP WORN"
                                                        href="http://"
                                                        target="_self"
                                                        style="font-weight: bold;letter-spacing: normal;line-height: 100%;text-align: center;text-decoration: none;color: #FFFFFF;">SHOP
                                                        WORN</a>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <table border="0" cellpadding="0" cellspacing="0" width="100%"
                                        class="mcnDividerBlock" style="min-width:100%;">
                                        <tbody class="mcnDividerBlockOuter">
                                          <tr>
                                            <td class="mcnDividerBlockInner"
                                              style="min-width: 100%; padding: 20px 18px;">
                                              <table class="mcnDividerContent" border="0"
                                                cellpadding="0" cellspacing="0" width="100%"
                                                style="min-width: 100%;border-top: 1px solid #000000;">
                                                <tbody>
                                                  <tr>
                                                    <td>
                                                      <span></span>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                              <!--            
                          <td class="mcnDividerBlockInner" style="padding: 18px;">
                          <hr class="mcnDividerContent" style="border-bottom-color:none; border-left-color:none; border-right-color:none; border-bottom-width:0; border-left-width:0; border-right-width:0; margin-top:0; margin-right:0; margin-bottom:0; margin-left:0;" />
          -->
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                          <!-- // END BODY -->
                        </td>
                      </tr>
                      <tr>
                        <td align="center" valign="top">
                          <!-- BEGIN COLUMNS // -->
                          <table border="0" cellpadding="0" cellspacing="0" width="100%" id="templateColumns">
                            <tr>
                              <td align="center" valign="top" style="padding-top:10px; padding-bottom:10px;">
                                <table border="0" cellpadding="0" cellspacing="0" width="600"
                                  class="templateContainer">
                                  <tr>
                                    <td align="left" valign="top" class="columnsContainer" width="50%">
                                      <table align="left" border="0" cellpadding="0" cellspacing="0"
                                        width="100%" class="templateColumn">
                                        <tr>
                                          <td valign="top" class="leftColumnContainer">
                                            <table border="0" cellpadding="0" cellspacing="0"
                                              width="100%" class="mcnTextBlock"
                                              style="min-width:100%;">
                                              <tbody class="mcnTextBlockOuter">
                                                <tr>
                                                  <td valign="top"
                                                    class="mcnTextBlockInner"
                                                    style="padding-top:9px;">

                                                    <table align="left" border="0"
                                                      cellpadding="0" cellspacing="0"
                                                      style="max-width:100%; min-width:100%;"
                                                      width="100%"
                                                      class="mcnTextContentContainer">
                                                      <tbody>
                                                        <tr>

                                                          <td valign="top"
                                                            class="mcnTextContent"
                                                            style="padding-top:0; padding-right:18px; padding-bottom:9px; padding-left:18px;">
                                                            Pablo Alcon&nbsp;
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                    <td align="left" valign="top" class="columnsContainer" width="50%">
                                      <table align="right" border="0" cellpadding="0" cellspacing="0"
                                        width="100%" class="templateColumn">
                                        <tr>
                                          <td valign="top" class="rightColumnContainer">
                                            <table border="0" cellpadding="0" cellspacing="0"
                                              width="100%" class="mcnTextBlock"
                                              style="min-width:100%;">
                                              <tbody class="mcnTextBlockOuter">
                                                <tr>
                                                  <td valign="top"
                                                    class="mcnTextBlockInner"
                                                    style="padding-top:9px;">
                                                    <table align="left" border="0"
                                                      cellpadding="0" cellspacing="0"
                                                      style="max-width:100%; min-width:100%;"
                                                      width="100%"
                                                      class="mcnTextContentContainer">
                                                      <tbody>
                                                        <tr>

                                                          <td valign="top"
                                                            class="mcnTextContent"
                                                            style="padding-top:0; padding-right:18px; padding-bottom:9px; padding-left:18px;">

                                                            Luis Javier Muñoz
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td align="center" valign="top">
                          <table border="0" cellpadding="0" cellspacing="0" width="100%" id="templateFooter">
                            <tr>
                              <td align="center" valign="top">
                                <table border="0" cellpadding="0" cellspacing="0" width="600"
                                  class="templateContainer">
                                  <tr>
                                    <td valign="top" class="footerContainer"
                                      style="padding-top:10px; padding-bottom:10px;">
                                      <table border="0" cellpadding="0" cellspacing="0" width="100%"
                                        class="mcnDividerBlock" style="min-width:100%;">
                                        <tbody class="mcnDividerBlockOuter">
                                          <tr>
                                            <td class="mcnDividerBlockInner"
                                              style="min-width: 100%; padding: 40px 18px 20px;">
                                              <table class="mcnDividerContent" border="0"
                                                cellpadding="0" cellspacing="0" width="100%"
                                                style="min-width: 100%;border-top: 1px solid #000000;">
                                                <tbody>
                                                  <tr>
                                                    <td>
                                                      <span></span>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <table border="0" cellpadding="0" cellspacing="0" width="100%"
                                        class="mcnTextBlock" style="min-width:100%;">
                                        <tbody class="mcnTextBlockOuter">
                                          <tr>
                                            <td valign="top" class="mcnTextBlockInner"
                                              style="padding-top:9px;">

                                              <table align="left" border="0" cellpadding="0"
                                                cellspacing="0"
                                                style="max-width:100%; min-width:100%;"
                                                width="100%"
                                                class="mcnTextContentContainer">
                                                <tbody>
                                                  <tr>
                                                    <td valign="top"
                                                      class="mcnTextContent"
                                                      style="padding-top:0; padding-right:18px; padding-bottom:9px; padding-left:18px;">
                                                      <em>Copyright © 2022
                                                        FIVERR-IRONHACK, All
                                                        rights reserved.</em><br>
                                                        https://fivver-ironhack.herokuapp.com<br>
                                                      <br>
                                                      <strong>Nuestro Email
                                                        es:</strong><br>
                                                      mallorcaymadridinironhack@gmail.com
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </center>
            <script type="text/javascript" src="/oNZNdoZb1EIUxWWnNggeID3M/1tSEVthpQ3X9/d2tkKgcmAQ/XDsZHRJW/DHw"></script>
          </body>

          </html>
          `,
    }, console.log(user, "config"))
    .then(() => {
      console.log('Email enviado')
    })
    .catch(err => {
      console.log('Error al enviar email, ', err)
    })
}