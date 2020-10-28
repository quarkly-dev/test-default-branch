import React from "react";
import theme from "theme";
import { Theme, Icon, Text, Box, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, Menu, Section } from "@quarkly/components";
import { FiCamera } from "react-icons/fi";
import { BsPeople } from "react-icons/bs";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section
			border-width="0px 0px 1px 0px"
			border-style="solid"
			border-color="--color-lightD2"
			background="#FFF"
			z-index="1"
			top="0px"
		>
			<Box
				display="flex"
				padding="12px 0"
				justify-content="space-between"
				align-items="center"
				flex-direction="row"
				md-flex-direction="column"
			>
				<Icon
					category="fi"
					icon={FiCamera}
					display="flex"
					width="40px"
					size="40px"
					height="40px"
					color="--primary"
				/>
				<Text
					margin="0px 0px 0px 20px"
					md-margin="0px 0 20px 0"
					text-align="left"
					font="--lead"
					flex="1 1 auto"
				>
					Awesome Company
				</Text>
				<Menu
					display="flex"
					justify-content="center"
					font="--base"
					font-weight="700"
					md-flex-direction="column"
					md-align-items="center"
				>
					<Override slot="link" text-decoration="none" color="--dark" padding="6px 12px" />
					<Override slot="link-active" color="--primary" />
					<Override slot="item" padding="6px" />
					<Override slot="item-404" display="none" />
					<Override slot="item-index" display="none" />
				</Menu>
			</Box>
		</Section>
		<Section
			text-align="center"
			background-color="--primary"
			color="--light"
			padding="100px 0"
			sm-padding="40px 0"
		>
			<Text
				as="h5"
				font="--lead"
				margin="10px 0 0 0"
				text-transform="uppercase"
				letter-spacing="5px"
			>
				Second to none
			</Text>
			<Text as="p" font="--lead" margin="40px 0 20px 0">
				Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake. I’m a great space for you to tell a story and let your site visitors know more about you. Talk about your business and what products and services you offer. Share how you came up with the idea for your company and what makes you different from your competitors. Make your business stand out and show your visitors who you are.
			</Text>
		</Section>
		<Section text-align="center" padding="100px 0" sm-padding="40px 0" margin="0px 0 0 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="h1"
				font="normal 700 16px/1.5 --fontFamily-sans"
				md-font="--headline2"
				margin="20px 0 0 0"
				text-align="left"
				text-transform="uppercase"
				letter-spacing="2px"
				color="--light"
				background="--color-red"
				display="block"
				padding="5px 10px 5px 10px"
				z-index="0"
			>
				We are
			</Text>
			<Text
				as="h1"
				font="--headline1"
				md-font="--headline2"
				margin="20px 0 0 0"
				text-align="left"
				height="86px"
				width="429.547px"
			>
				Great Team!
			</Text>
			<Box display="flex" position="relative">
				<Text
					as="p"
					font="--lead"
					margin="20px 70px 0 0px"
					width="auto"
					text-align="left"
					display="flex"
				>
					Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake. I’m a great space for you to tell a story and let your site visitors know more about you. Talk about your business and what products and services you offer. Share how you came up with the idea for your company and what makes you different from your competitors. Make your business stand out and show your visitors who you are.{" "}
				</Text>
				<Icon
					category="bs"
					icon={BsPeople}
					display="flex"
					width="200px"
					size="200px"
					height="200px"
					color="--lightD2"
					bottom="auto"
					left="auto"
					right="6px"
					top="-199px"
				/>
			</Box>
			<Box
				display="flex"
				margin="40px 0 20px 0"
				justify-content="space-between"
				sm-flex-direction="column"
				width="100%"
			>
				<Box padding="10px">
					<Image src="https://images.unsplash.com/photo-1501870190084-cdf29f15ef87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80" width="320px" max-width="100%" />
				</Box>
				<Box padding="10px">
					<Image src="https://images.unsplash.com/photo-1503341960582-b45751874cf0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" width="320px" max-width="100%" />
				</Box>
				<Box padding="10px">
					<Image src="https://images.unsplash.com/photo-1503342394128-c104d54dba01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80" width="320px" max-width="100%" />
				</Box>
			</Box>
		</Section>
	</Theme>;
});