import React from "react";
import theme from "theme";
import { Theme, Text, Image, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Section } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section text-align="center" padding="100px 0" sm-padding="40px 0">
			<Text
				as="h1"
				font="--headline1"
				md-font="--headline2"
				margin="20px 0 0 0"
				box-shadow="0 0 0 0 --color-orange"
			>
				About Us
			</Text>
			<Text as="p" font="--lead" margin="20px 0 20px 0">
				Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake. I’m a great space for you to tell a story and let your site visitors know more about you. Talk about your business and what products and services you offer. Share how you came up with the idea for your company and what makes you different from your competitors. Make your business stand out and show your visitors who you are.{" "}
			</Text>
			<Box display="flex" margin="40px 0 20px 0" justify-content="space-around" sm-flex-direction="column">
				<Box padding="10px">
					<Image
						src="https://test-upl.quarkly.io/5e6732b72db4d100244334af/images/sergio-arze-bnsBhO9fLYk-unsplash.jpg?v=2020-09-21T08:32:12.130Z"
						width="320px"
						max-width="100%"
						height="320px"
						object-fit="cover"
					/>
				</Box>
				<Box padding="10px">
					<Image src="https://test-upl.quarkly.io/5e6732b72db4d100244334af/images/julie-johnson-OLoq19jOd9g-unsplash.jpg?v=2020-09-21T08:32:12.088Z" width="320px" max-width="100%" />
				</Box>
				<Box padding="10px">
					<Image src="https://test-upl.quarkly.io/5e6732b72db4d100244334af/images/iso-topon-JCbsOIhr5BY-unsplash.jpg?v=2020-09-21T08:32:12.048Z" width="320px" max-width="100%" />
				</Box>
			</Box>
		</Section>
	</Theme>;
});