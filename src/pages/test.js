import React from "react";
import theme from "theme";
import { Theme, Text, Image, Span, Box, Icon, List, Button, Hr, Strong, Em, Link } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, Section } from "@quarkly/components";
import { BsDot } from "react-icons/bs";
import { MdFace } from "react-icons/md";
import { FaTree } from "react-icons/fa";
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
			padding="130px 0px 100px 0px"
			sm-padding="40px 0"
			background="--color-darkL2"
			border-width="0px 0px 3px 0px"
			border-style="solid"
			border-color="--color-primary"
		>
			<Override slot="SectionContent" align-items="flex-start" flex-direction="column" />
			<Text
				as="h2"
				font="--headline1"
				md-font="--headline2"
				margin="20px 0 0 0"
				width="33.33%"
				color="--light"
			>
				Введение в Quarkly
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="20px 0 0 0"
				width="66.66%"
				color="--lightD2"
			>
				Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake. I’m a great space for you to tell a story and let your site visitors know more about you. Talk about your business and what products and services you offer. Share how you came up with the idea for your company and what makes you different from your competitors. Make your business stand out and show your visitors who you are.
			</Text>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				ШАг 1 из 5
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
			>
				Добавьте элементы
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
			>
				Чтобы начать, откройте панель слоев, переключитесь на вкладку Components, затем перетащите элементы на рабочую область.
			</Text>
			<Box display="flex" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Откройте панель слоев, переключитесь на вкладку Components, выберите{" "}
								<Image
									width="24px"
									height="24px"
									vertical-align="top"
									src="https://artemzhigalin.ru/src/onboarding-tutorial-box.svg"
									margin="0px 2px 0px 2px"
								/>
								<Span
									color="--primary"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Box
								</Span>
								{" "}схватите его и бросьте в Рабочую область.
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-1-1-dragdrop.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						quarkly-title="Item 2"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							2
						</Text>
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 8px 0px"
								width="100%"
								color="--darkL2"
							>
								Затем бросьте внутрь{" "}
								<Image
									width="24px"
									height="24px"
									vertical-align="top"
									src="https://artemzhigalin.ru/src/onboarding-tutorial-box.svg"
									margin="0px 2px 0px 2px"
								/>
								<Span
									color="--primary"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Box
								</Span>
								{" "}следующие элементы сохраняя порядок:
							</Text>
							<List width="100%" box-sizing="border-box" list-style-type="none" padding="0px 0px 0px 0px">
								<Box display="flex" align-items="center" margin="0px 0px 4px 0px">
									<Icon category="bs" icon={BsDot} />
									<Image
										width="24px"
										height="24px"
										vertical-align="top"
										src="https://artemzhigalin.ru/src/onboarding-tutorial-icon.svg"
										margin="0px 4px 0px 2px"
									/>
									<Text
										display="block"
										font="--base"
										color="--primary"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										margin="0px 0px 0px 0px"
									>
										Icon
									</Text>
								</Box>
								<Box display="flex" align-items="center" margin="0px 0px 4px 0px">
									<Icon category="bs" icon={BsDot} />
									<Image
										width="24px"
										height="24px"
										vertical-align="top"
										src="https://artemzhigalin.ru/src/onboarding-tutorial-text.svg"
										margin="0px 4px 0px 2px"
									/>
									<Text
										display="block"
										font="--base"
										color="--primary"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										margin="0px 0px 0px 0px"
									>
										Text
									</Text>
								</Box>
								<Box display="flex" align-items="center" margin="0px 0px 4px 0px">
									<Icon category="bs" icon={BsDot} />
									<Image
										width="24px"
										height="24px"
										vertical-align="top"
										src="https://artemzhigalin.ru/src/onboarding-tutorial-text.svg"
										margin="0px 4px 0px 2px"
									/>
									<Text
										display="block"
										font="--base"
										color="--primary"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										margin="0px 0px 0px 0px"
									>
										Text
									</Text>
								</Box>
								<Box display="flex" align-items="center" margin="0px 0px 4px 0px">
									<Icon category="bs" icon={BsDot} />
									<Image
										width="24px"
										height="24px"
										vertical-align="top"
										src="https://artemzhigalin.ru/src/onboarding-tutorial-button.svg"
										margin="0px 4px 0px 2px"
									/>
									<Text
										display="block"
										font="--base"
										color="--primary"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										margin="0px 0px 0px 0px"
									>
										Button
									</Text>
								</Box>
							</List>
							<Text
								display="block"
								font="--base"
								margin="20px 0px 8px 0px"
								width="100%"
								color="--darkL2"
							>
								Первый элемент
								<Image
									width="24px"
									height="24px"
									vertical-align="top"
									src="https://artemzhigalin.ru/src/onboarding-tutorial-text.svg"
									margin="0px 2px 0px 2px"
								/>
								<Span
									color="--primary"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Text
								</Span>
								{"  "}будет заголовком, а второй описанием карточки.
							</Text>
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							3
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Кликните два раза на элементы, и измените текст как в примере.
						</Text>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						РАБОЧАЯ ОБЛАСТЬ
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						margin="0px 0px 20px 0px"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						padding="30px 30px 30px 30px"
						min-height="320px"
						text-align="left"
					/>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						ПРИМЕР
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box width="100%">
							<Icon category="md" icon={MdFace} size="64зч" />
							<Text>
								Лес и горы
							</Text>
							<Text>
								Удивительное путешествие по лесам и горам оздоровит вас и запомниться на всю жизнь
							</Text>
							<Button>
								Присоединиться
							</Button>
							<Hr />
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				ШАг 2 из 5
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
				letter-spacing="1px"
			>
				Стилизуйте фон
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
			>
				Теперь когда мы создали структуру карточки, давайте немного украсим её: добавим фон, скруглим углы
			</Text>
			<Box display="flex" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Выберите{" "}
								<Image
									width="24px"
									height="24px"
									vertical-align="top"
									src="https://artemzhigalin.ru/src/onboarding-tutorial-box.svg"
									margin="0px 2px 0px 2px"
								/>
								<Span
									color="--primary"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Box
								</Span>
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-1-1-dragdrop.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						quarkly-title="Item 2"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							2
						</Text>
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Перейдите в панель Styles в раздел Layout и задайте свойству Width 100%, а Height 320px
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-2-1-wh.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							3
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Теперь сохраняя выделение Box перейдите в раздел Backgrounds, кликните в поле ввода, чтобы открыть панель, выберите Type URL и введите адрес изображения:{" "}
						</Text>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							4
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Кликните два раза на элементы, и измените текст как в примере.
						</Text>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						РАБОЧАЯ ОБЛАСТЬ
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						margin="0px 0px 20px 0px"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						padding="30px 30px 30px 30px"
						min-height="320px"
						text-align="left"
					/>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						ПРИМЕР
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box width="100%" background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/cover" border-radius="12px" height="320px">
							<Icon category="md" icon={MdFace} />
							<Text>
								Лес и горы
							</Text>
							<Text>
								Удивительное путешествие по лесам и горам оздоровит вас и запомниться на всю жизнь
							</Text>
							<Button>
								Присоединиться
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				ШАг 3 из 5
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
			>
				Стилизуйте текст и кнопку
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
			>
				Попрактикуемся в новых навыках стилизации и оформим кнопку и текст так как показано в примере
			</Text>
			<Box display="flex" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Оформите ваши заголовок и описание в соответствии с примером. На этот раз воспользуйтесь вкладкой Typography
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-1-1-dragdrop.svg" border-radius="4px" />
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								ПОДСКАЗКА: Можно скопировать стили из примера используя горячие клавиши: для Mac: cmd+alt+c и cmd+alt+v, для Windows: ctrl+alt+c и ctrl+alt+v.
							</Text>
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						quarkly-title="Item 2"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							2
						</Text>
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Теперь стилизуем{" "}
								<Span
									color="--primary"
									hyphens="manual"
									overflow-wrap="normal"
									text-indent="0"
									text-overflow="clip"
									white-space="normal"
									word-break="normal"
								>
									Button
								</Span>
								. Изменим свойства: Color, Background и Border radius. Color мы изменяли только что, а Background и Border на предыдущем шаге.{" "}
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-2-1-wh.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							3
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Добавим{" "}
							<Span
								color="--primary"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Button
							</Span>
							{" "}тень. Для этого откроем вкладку Effects и свойство Box shadow. Значение скопируйте из примера.
						</Text>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							4
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Наконец добавим{" "}
							<Span
								color="--primary"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Button
							</Span>
							{" "}отступы . Добавьте margin 25px в верхнее поле, а  padding 50px в боковые и 15px в верхнее и нижнее поля.
						</Text>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						РАБОЧАЯ ОБЛАСТЬ
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						margin="0px 0px 20px 0px"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						padding="30px 30px 30px 30px"
						min-height="320px"
						text-align="left"
					/>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						ПРИМЕР
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box width="100%" background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/cover" border-radius="12px" height="320px">
							<Icon category="md" icon={MdFace} />
							<Text font="--headline2" text-transform="uppercase" color="--light" text-align="center">
								Лес и горы
							</Text>
							<Text font="--lead" color="--lightD2" text-align="center">
								Удивительное путешествие по лесам и горам оздоровит вас и запомниться на всю жизнь
							</Text>
							<Button
								background="--color-secondary"
								color="--darkL2"
								padding="12px 34px 12px 34px"
								border-radius="24px"
								text-transform="uppercase"
								letter-spacing="1.2px"
								margin="24px 0px 0px 0px"
								box-shadow="0 12px 3px -4px rgba(3, 18, 7, 0.3)"
								opacity="1"
							>
								Присоединиться
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				ШАг 4 из 5
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
			>
				Поменяйте иконку и шрифт
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
			>
				Зададим заголовку выразительный шрифт и поменяем иконку на более подходящую
			</Text>
			<Box display="flex" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Выберите заголовок, в панели стилей перейдите во вкладку Typography и нажмите на иконку  . Вы разорвали связь со значением из «темы», теперь добавим в проект новый шрифт. Для этого кликните на значение чтобы открыть панель. На панели нажмите на кнопку Add google fonts.{" "}
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-1-1-dragdrop.svg" border-radius="4px" />
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								В{" "}
								<Strong
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									модальном окне
								</Strong>
								{" "}
								<Span
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									<Span
										font="300 24px/24px --fontFamily-sans"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										выберите
									</Span>
								</Span>
								{" "}Open{" "}
								<Em
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Sans
								</Em>
								{" "}Condenced и  на него. Закрывайте окно и выбирайте его для поля Family.
							</Text>
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Теперь стилизуем{" "}
								<Span
									color="--primary"
									hyphens="manual"
									overflow-wrap="normal"
									text-indent="0"
									text-overflow="clip"
									white-space="normal"
									word-break="normal"
								>
									Button
								</Span>
								. Изменим свойства: Color, Background и Border radius. Color мы изменяли только что, а Background и Border на предыдущем шаге.{" "}
							</Text>
							<Link
								href="ya.ru"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								кликните
							</Link>
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						quarkly-title="Item 2"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							2
						</Text>
						<Box width="100%">
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-2-1-wh.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							3
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Добавим{" "}
							<Span
								color="--primary"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Button
							</Span>
							{" "}тень. Для этого откроем вкладку Effects и свойство Box shadow. Значение скопируйте из примера.
						</Text>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							4
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Наконец добавим{" "}
							<Span
								color="--primary"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Button
							</Span>
							{" "}отступы . Добавьте margin 25px в верхнее поле, а  padding 50px в боковые и 15px в верхнее и нижнее поля.
						</Text>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						РАБОЧАЯ ОБЛАСТЬ
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						margin="0px 0px 20px 0px"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						padding="30px 30px 30px 30px"
						min-height="320px"
						text-align="left"
					/>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						ПРИМЕР
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box width="100%" background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/cover" border-radius="12px" height="320px">
							<Icon category="fa" icon={FaTree} font="64px sans-serif" color="--light" />
							<Text font="normal 500 42px/1.2 --fontFamily-googleOpenSansCondensed" text-transform="uppercase" color="--light" text-align="center">
								Лес и горы
							</Text>
							<Text font="--lead" color="--lightD2" text-align="center">
								Удивительное путешествие по лесам и горам оздоровит вас и запомниться на всю жизнь
							</Text>
							<Button
								background="--color-secondary"
								color="--darkL2"
								padding="12px 34px 12px 34px"
								border-radius="24px"
								text-transform="uppercase"
								letter-spacing="1.2px"
								margin="24px 0px 0px 0px"
								box-shadow="0 12px 3px -4px rgba(3, 18, 7, 0.3)"
								opacity="1"
							>
								Присоединиться
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				ШАг 5 из 5
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
			>
				Центрируйте элементы{" "}
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
			>
				По умолчанию элементы выравниваются по верхнему левому краю.  Сделаем их по центру{" "}
				<Span
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					color="--primary"
				>
					Box
				</Span>
				{" "}c помощью display flex
			</Text>
			<Box display="flex" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Выберите{" "}
								<Span
									color="--primary"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Box
								</Span>
								{" "}на странице и откройте вкладку Layouts на панели Styles. Укажите свойству display значение flex. Это значит, что Box будет использовать flexbox —более удобный способ для выравнивания элементов.
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-1-1-dragdrop.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						quarkly-title="Item 2"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							2
						</Text>
						<Box width="100%">
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-2-1-wh.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							3
						</Text>
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Выберите значение center для свойств Align items и Justify content.
							</Text>
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								ПОДСКАЗКА: Поиграйтесь с различными значениями, чтобы понять как это работает.
							</Text>
						</Box>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						РАБОЧАЯ ОБЛАСТЬ
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						margin="0px 0px 20px 0px"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						padding="30px 30px 30px 30px"
						min-height="320px"
						text-align="left"
					>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
					</Box>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						ПРИМЕР
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box
							width="100%"
							background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/cover"
							border-radius="12px"
							height="320px"
							display="flex"
							flex-direction="column"
							align-items="center"
							justify-content="center"
							padding="48px 36px 72px 36px"
							opacity="1"
						>
							<Icon category="fa" icon={FaTree} font="64px sans-serif" color="--light" />
							<Text font="normal 500 48px/1.2 --fontFamily-googleOpenSansCondensed" text-transform="uppercase" color="--light" text-align="center">
								Лес и горы
							</Text>
							<Text font="--lead" color="--lightD2" text-align="center">
								Удивительное путешествие по лесам и горам оздоровит вас и запомниться на всю жизнь
							</Text>
							<Button
								background="--color-secondary"
								color="--darkL2"
								padding="12px 34px 12px 34px"
								border-radius="24px"
								text-transform="uppercase"
								letter-spacing="1.2px"
								margin="24px 0px 0px 0px"
								opacity="1"
								box-shadow="0 12px 3px -4px rgba(3, 18, 7, 0.3)"
							>
								Присоединиться
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				СУПЕРИГРА!
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
			>
				Отличная работа!
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
			>
				Вы создали первую карточку и изучили фундаментальные принципы веб-дизайна. Настало время проверить свои силы!
			</Text>
			<Box display="flex" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 8px 0px"
								width="100%"
								color="--darkL2"
							>
								Мы подготовили другую карточку для вас чтобы вы создали самостоятельно. Если вы что-то забыли, прокрутите наверх и всё вспомнится! Хорошего дизайна!
							</Text>
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								ПОДСКАЗКА: Выбирайте элементы в примере и смотрите их стили.
							</Text>
						</Box>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						РАБОЧАЯ ОБЛАСТЬ
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						margin="0px 0px 20px 0px"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						padding="30px 30px 30px 30px"
						min-height="320px"
						text-align="left"
					/>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						ПРИМЕР
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box
							width="100%"
							background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/cover"
							border-radius="8px"
							height="320px"
							display="flex"
							flex-direction="column"
							align-items="center"
							justify-content="center"
							padding="48px 36px 72px 36px"
							opacity="1"
						>
							<Icon category="fa" icon={FaTree} font="64px sans-serif" color="--light" />
							<Text
								font="normal 500 48px/1.2 --fontFamily-googleOpenSansCondensed"
								text-transform="uppercase"
								color="--light"
								text-align="center"
								margin="16px 0px 0px 0px"
							>
								Лес и горы
							</Text>
							<Text font="--lead" color="--lightD2" text-align="center">
								Удивительное путешествие по лесам и горам оздоровит вас и запомниться на всю жизнь
							</Text>
							<Button
								background="--color-secondary"
								color="--darkL2"
								padding="12px 34px 12px 34px"
								border-radius="24px"
								text-transform="uppercase"
								letter-spacing="1.2px"
								margin="24px 0px 0px 0px"
								opacity="1"
								box-shadow="0 12px 3px -4px rgba(3, 18, 7, 0.3)"
							>
								Присоединиться
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				Идем дальше
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
			>
				Переходите на следующий шаг
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 0px 0"
				width="50%"
				color="--darkL2"
			>
				Вы отлично справились с первым шагом к знакомству с Quarkly. На следующем шаге вы углубите свои знания и приобретете навыки:
			</Text>
			<List margin="0px 0px 16px 0px">
				<Text font="--base">
					На что влияют другие свойства элементов;
				</Text>
				<Text font="--base">
					Как стилизовать состояния: hover, focused и другие;
				</Text>
				<Text font="--base">
					Как делать адаптивный дизайн;
				</Text>
				<Text font="--base">
					Как подключать шрифты из Google Fonts.
				</Text>
			</List>
			<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-1-1-dragdrop.svg" border-radius="4px" max-width="540px" />
		</Section>
		<Section
			padding="130px 0px 100px 0px"
			sm-padding="40px 0"
			background="--color-darkL2"
			border-width="0px 0px 3px 0px"
			border-style="solid"
			border-color="--color-primary"
		>
			<Override slot="SectionContent" align-items="flex-start" flex-direction="column" />
			<Text
				as="h2"
				font="--headline1"
				md-font="--headline2"
				margin="20px 0 0 0"
				width="33.33%"
				color="--light"
			>
				Введение в Quarkly
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="20px 0 0 0"
				width="66.66%"
				color="--lightD2"
			>
				Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake. I’m a great space for you to tell a story and let your site visitors know more about you. Talk about your business and what products and services you offer. Share how you came up with the idea for your company and what makes you different from your competitors. Make your business stand out and show your visitors who you are.
			</Text>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				ШАг 1 из 5
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
			>
				Добавьте элементы
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
			>
				Чтобы начать, откройте панель слоев, переключитесь на вкладку Components, затем перетащите элементы на рабочую область.
			</Text>
			<Box display="flex" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Откройте панель слоев, переключитесь на вкладку Components, выберите{" "}
								<Image
									width="24px"
									height="24px"
									vertical-align="top"
									src="https://artemzhigalin.ru/src/onboarding-tutorial-box.svg"
									margin="0px 2px 0px 2px"
								/>
								<Span
									color="--primary"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Box
								</Span>
								{" "}схватите его и бросьте в Рабочую область.
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-1-1-dragdrop.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						quarkly-title="Item 2"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							2
						</Text>
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 8px 0px"
								width="100%"
								color="--darkL2"
							>
								Затем бросьте внутрь{" "}
								<Image
									width="24px"
									height="24px"
									vertical-align="top"
									src="https://artemzhigalin.ru/src/onboarding-tutorial-box.svg"
									margin="0px 2px 0px 2px"
								/>
								<Span
									color="--primary"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Box
								</Span>
								{" "}следующие элементы сохраняя порядок:
							</Text>
							<List width="100%" box-sizing="border-box" list-style-type="none" padding="0px 0px 0px 0px">
								<Box display="flex" align-items="center" margin="0px 0px 4px 0px">
									<Icon category="bs" icon={BsDot} />
									<Image
										width="24px"
										height="24px"
										vertical-align="top"
										src="https://artemzhigalin.ru/src/onboarding-tutorial-icon.svg"
										margin="0px 4px 0px 2px"
									/>
									<Text
										display="block"
										font="--base"
										color="--primary"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										margin="0px 0px 0px 0px"
									>
										Icon
									</Text>
								</Box>
								<Box display="flex" align-items="center" margin="0px 0px 4px 0px">
									<Icon category="bs" icon={BsDot} />
									<Image
										width="24px"
										height="24px"
										vertical-align="top"
										src="https://artemzhigalin.ru/src/onboarding-tutorial-text.svg"
										margin="0px 4px 0px 2px"
									/>
									<Text
										display="block"
										font="--base"
										color="--primary"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										margin="0px 0px 0px 0px"
									>
										Text
									</Text>
								</Box>
								<Box display="flex" align-items="center" margin="0px 0px 4px 0px">
									<Icon category="bs" icon={BsDot} />
									<Image
										width="24px"
										height="24px"
										vertical-align="top"
										src="https://artemzhigalin.ru/src/onboarding-tutorial-text.svg"
										margin="0px 4px 0px 2px"
									/>
									<Text
										display="block"
										font="--base"
										color="--primary"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										margin="0px 0px 0px 0px"
									>
										Text
									</Text>
								</Box>
								<Box display="flex" align-items="center" margin="0px 0px 4px 0px">
									<Icon category="bs" icon={BsDot} />
									<Image
										width="24px"
										height="24px"
										vertical-align="top"
										src="https://artemzhigalin.ru/src/onboarding-tutorial-button.svg"
										margin="0px 4px 0px 2px"
									/>
									<Text
										display="block"
										font="--base"
										color="--primary"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										margin="0px 0px 0px 0px"
									>
										Button
									</Text>
								</Box>
							</List>
							<Text
								display="block"
								font="--base"
								margin="20px 0px 8px 0px"
								width="100%"
								color="--darkL2"
							>
								Первый элемент
								<Image
									width="24px"
									height="24px"
									vertical-align="top"
									src="https://artemzhigalin.ru/src/onboarding-tutorial-text.svg"
									margin="0px 2px 0px 2px"
								/>
								<Span
									color="--primary"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Text
								</Span>
								{"  "}будет заголовком, а второй описанием карточки.
							</Text>
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							3
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Кликните два раза на элементы, и измените текст как в примере.
						</Text>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						РАБОЧАЯ ОБЛАСТЬ
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						margin="0px 0px 20px 0px"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						padding="30px 30px 30px 30px"
						min-height="320px"
						text-align="left"
					/>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						ПРИМЕР
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box width="100%">
							<Icon category="md" icon={MdFace} size="64зч" />
							<Text>
								Лес и горы
							</Text>
							<Text>
								Удивительное путешествие по лесам и горам оздоровит вас и запомниться на всю жизнь
							</Text>
							<Button>
								Присоединиться
							</Button>
							<Hr />
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				ШАг 2 из 5
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
				letter-spacing="1px"
			>
				Стилизуйте фон
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
			>
				Теперь когда мы создали структуру карточки, давайте немного украсим её: добавим фон, скруглим углы
			</Text>
			<Box display="flex" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Выберите{" "}
								<Image
									width="24px"
									height="24px"
									vertical-align="top"
									src="https://artemzhigalin.ru/src/onboarding-tutorial-box.svg"
									margin="0px 2px 0px 2px"
								/>
								<Span
									color="--primary"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Box
								</Span>
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-1-1-dragdrop.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						quarkly-title="Item 2"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							2
						</Text>
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Перейдите в панель Styles в раздел Layout и задайте свойству Width 100%, а Height 320px
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-2-1-wh.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							3
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Теперь сохраняя выделение Box перейдите в раздел Backgrounds, кликните в поле ввода, чтобы открыть панель, выберите Type URL и введите адрес изображения:{" "}
						</Text>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							4
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Кликните два раза на элементы, и измените текст как в примере.
						</Text>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						РАБОЧАЯ ОБЛАСТЬ
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						margin="0px 0px 20px 0px"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						padding="30px 30px 30px 30px"
						min-height="320px"
						text-align="left"
					/>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						ПРИМЕР
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box width="100%" background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/cover" border-radius="12px" height="320px">
							<Icon category="md" icon={MdFace} />
							<Text>
								Лес и горы
							</Text>
							<Text>
								Удивительное путешествие по лесам и горам оздоровит вас и запомниться на всю жизнь
							</Text>
							<Button>
								Присоединиться
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				ШАг 3 из 5
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
			>
				Стилизуйте текст и кнопку
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
			>
				Попрактикуемся в новых навыках стилизации и оформим кнопку и текст так как показано в примере
			</Text>
			<Box display="flex" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Оформите ваши заголовок и описание в соответствии с примером. На этот раз воспользуйтесь вкладкой Typography
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-1-1-dragdrop.svg" border-radius="4px" />
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								ПОДСКАЗКА: Можно скопировать стили из примера используя горячие клавиши: для Mac: cmd+alt+c и cmd+alt+v, для Windows: ctrl+alt+c и ctrl+alt+v.
							</Text>
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						quarkly-title="Item 2"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							2
						</Text>
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Теперь стилизуем{" "}
								<Span
									color="--primary"
									hyphens="manual"
									overflow-wrap="normal"
									text-indent="0"
									text-overflow="clip"
									white-space="normal"
									word-break="normal"
								>
									Button
								</Span>
								. Изменим свойства: Color, Background и Border radius. Color мы изменяли только что, а Background и Border на предыдущем шаге.{" "}
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-2-1-wh.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							3
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Добавим{" "}
							<Span
								color="--primary"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Button
							</Span>
							{" "}тень. Для этого откроем вкладку Effects и свойство Box shadow. Значение скопируйте из примера.
						</Text>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							4
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Наконец добавим{" "}
							<Span
								color="--primary"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Button
							</Span>
							{" "}отступы . Добавьте margin 25px в верхнее поле, а  padding 50px в боковые и 15px в верхнее и нижнее поля.
						</Text>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						РАБОЧАЯ ОБЛАСТЬ
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						margin="0px 0px 20px 0px"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						padding="30px 30px 30px 30px"
						min-height="320px"
						text-align="left"
					/>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						ПРИМЕР
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box width="100%" background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/cover" border-radius="12px" height="320px">
							<Icon category="md" icon={MdFace} />
							<Text font="--headline2" text-transform="uppercase" color="--light" text-align="center">
								Лес и горы
							</Text>
							<Text font="--lead" color="--lightD2" text-align="center">
								Удивительное путешествие по лесам и горам оздоровит вас и запомниться на всю жизнь
							</Text>
							<Button
								background="--color-secondary"
								color="--darkL2"
								padding="12px 34px 12px 34px"
								border-radius="24px"
								text-transform="uppercase"
								letter-spacing="1.2px"
								margin="24px 0px 0px 0px"
								box-shadow="0 12px 3px -4px rgba(3, 18, 7, 0.3)"
								opacity="1"
							>
								Присоединиться
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				ШАг 4 из 5
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
			>
				Поменяйте иконку и шрифт
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
			>
				Зададим заголовку выразительный шрифт и поменяем иконку на более подходящую
			</Text>
			<Box display="flex" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Выберите заголовок, в панели стилей перейдите во вкладку Typography и нажмите на иконку  . Вы разорвали связь со значением из «темы», теперь добавим в проект новый шрифт. Для этого кликните на значение чтобы открыть панель. На панели нажмите на кнопку Add google fonts.{" "}
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-1-1-dragdrop.svg" border-radius="4px" />
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								В{" "}
								<Strong
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									модальном окне
								</Strong>
								{" "}
								<Span
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									<Span
										font="300 24px/24px --fontFamily-sans"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										выберите
									</Span>
								</Span>
								{" "}Open{" "}
								<Em
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Sans
								</Em>
								{" "}Condenced и  на него. Закрывайте окно и выбирайте его для поля Family.
							</Text>
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Теперь стилизуем{" "}
								<Span
									color="--primary"
									hyphens="manual"
									overflow-wrap="normal"
									text-indent="0"
									text-overflow="clip"
									white-space="normal"
									word-break="normal"
								>
									Button
								</Span>
								. Изменим свойства: Color, Background и Border radius. Color мы изменяли только что, а Background и Border на предыдущем шаге.{" "}
							</Text>
							<Link
								href="ya.ru"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								кликните
							</Link>
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						quarkly-title="Item 2"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							2
						</Text>
						<Box width="100%">
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-2-1-wh.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							3
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Добавим{" "}
							<Span
								color="--primary"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Button
							</Span>
							{" "}тень. Для этого откроем вкладку Effects и свойство Box shadow. Значение скопируйте из примера.
						</Text>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							4
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Наконец добавим{" "}
							<Span
								color="--primary"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Button
							</Span>
							{" "}отступы . Добавьте margin 25px в верхнее поле, а  padding 50px в боковые и 15px в верхнее и нижнее поля.
						</Text>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						РАБОЧАЯ ОБЛАСТЬ
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						margin="0px 0px 20px 0px"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						padding="30px 30px 30px 30px"
						min-height="320px"
						text-align="left"
					/>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						ПРИМЕР
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box width="100%" background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/cover" border-radius="12px" height="320px">
							<Icon category="fa" icon={FaTree} font="64px sans-serif" color="--light" />
							<Text font="normal 500 42px/1.2 --fontFamily-googleOpenSansCondensed" text-transform="uppercase" color="--light" text-align="center">
								Лес и горы
							</Text>
							<Text font="--lead" color="--lightD2" text-align="center">
								Удивительное путешествие по лесам и горам оздоровит вас и запомниться на всю жизнь
							</Text>
							<Button
								background="--color-secondary"
								color="--darkL2"
								padding="12px 34px 12px 34px"
								border-radius="24px"
								text-transform="uppercase"
								letter-spacing="1.2px"
								margin="24px 0px 0px 0px"
								box-shadow="0 12px 3px -4px rgba(3, 18, 7, 0.3)"
								opacity="1"
							>
								Присоединиться
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				ШАг 5 из 5
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
			>
				Центрируйте элементы{" "}
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
			>
				По умолчанию элементы выравниваются по верхнему левому краю.  Сделаем их по центру{" "}
				<Span
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					color="--primary"
				>
					Box
				</Span>
				{" "}c помощью display flex
			</Text>
			<Box display="flex" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Выберите{" "}
								<Span
									color="--primary"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Box
								</Span>
								{" "}на странице и откройте вкладку Layouts на панели Styles. Укажите свойству display значение flex. Это значит, что Box будет использовать flexbox —более удобный способ для выравнивания элементов.
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-1-1-dragdrop.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						quarkly-title="Item 2"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							2
						</Text>
						<Box width="100%">
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-2-1-wh.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							3
						</Text>
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Выберите значение center для свойств Align items и Justify content.
							</Text>
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								ПОДСКАЗКА: Поиграйтесь с различными значениями, чтобы понять как это работает.
							</Text>
						</Box>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						РАБОЧАЯ ОБЛАСТЬ
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						margin="0px 0px 20px 0px"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						padding="30px 30px 30px 30px"
						min-height="320px"
						text-align="left"
					>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
					</Box>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						ПРИМЕР
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box
							width="100%"
							background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/cover"
							border-radius="12px"
							height="320px"
							display="flex"
							flex-direction="column"
							align-items="center"
							justify-content="center"
							padding="48px 36px 72px 36px"
							opacity="1"
						>
							<Icon category="fa" icon={FaTree} font="64px sans-serif" color="--light" />
							<Text font="normal 500 48px/1.2 --fontFamily-googleOpenSansCondensed" text-transform="uppercase" color="--light" text-align="center">
								Лес и горы
							</Text>
							<Text font="--lead" color="--lightD2" text-align="center">
								Удивительное путешествие по лесам и горам оздоровит вас и запомниться на всю жизнь
							</Text>
							<Button
								background="--color-secondary"
								color="--darkL2"
								padding="12px 34px 12px 34px"
								border-radius="24px"
								text-transform="uppercase"
								letter-spacing="1.2px"
								margin="24px 0px 0px 0px"
								opacity="1"
								box-shadow="0 12px 3px -4px rgba(3, 18, 7, 0.3)"
							>
								Присоединиться
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				СУПЕРИГРА!
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
			>
				Отличная работа!
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
			>
				Вы создали первую карточку и изучили фундаментальные принципы веб-дизайна. Настало время проверить свои силы!
			</Text>
			<Box display="flex" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 8px 0px"
								width="100%"
								color="--darkL2"
							>
								Мы подготовили другую карточку для вас чтобы вы создали самостоятельно. Если вы что-то забыли, прокрутите наверх и всё вспомнится! Хорошего дизайна!
							</Text>
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								ПОДСКАЗКА: Выбирайте элементы в примере и смотрите их стили.
							</Text>
						</Box>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						РАБОЧАЯ ОБЛАСТЬ
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						margin="0px 0px 20px 0px"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						padding="30px 30px 30px 30px"
						min-height="320px"
						text-align="left"
					/>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						ПРИМЕР
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box
							width="100%"
							background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/cover"
							border-radius="8px"
							height="320px"
							display="flex"
							flex-direction="column"
							align-items="center"
							justify-content="center"
							padding="48px 36px 72px 36px"
							opacity="1"
						>
							<Icon category="fa" icon={FaTree} font="64px sans-serif" color="--light" />
							<Text
								font="normal 500 48px/1.2 --fontFamily-googleOpenSansCondensed"
								text-transform="uppercase"
								color="--light"
								text-align="center"
								margin="16px 0px 0px 0px"
							>
								Лес и горы
							</Text>
							<Text font="--lead" color="--lightD2" text-align="center">
								Удивительное путешествие по лесам и горам оздоровит вас и запомниться на всю жизнь
							</Text>
							<Button
								background="--color-secondary"
								color="--darkL2"
								padding="12px 34px 12px 34px"
								border-radius="24px"
								text-transform="uppercase"
								letter-spacing="1.2px"
								margin="24px 0px 0px 0px"
								opacity="1"
								box-shadow="0 12px 3px -4px rgba(3, 18, 7, 0.3)"
							>
								Присоединиться
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				Идем дальше
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
			>
				Переходите на следующий шаг
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 0px 0"
				width="50%"
				color="--darkL2"
			>
				Вы отлично справились с первым шагом к знакомству с Quarkly. На следующем шаге вы углубите свои знания и приобретете навыки:
			</Text>
			<List margin="0px 0px 16px 0px">
				<Text font="--base">
					На что влияют другие свойства элементов;
				</Text>
				<Text font="--base">
					Как стилизовать состояния: hover, focused и другие;
				</Text>
				<Text font="--base">
					Как делать адаптивный дизайн;
				</Text>
				<Text font="--base">
					Как подключать шрифты из Google Fonts.
				</Text>
			</List>
			<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-1-1-dragdrop.svg" border-radius="4px" max-width="540px" />
		</Section>
		<Section
			padding="130px 0px 100px 0px"
			sm-padding="40px 0"
			background="--color-darkL2"
			border-width="0px 0px 3px 0px"
			border-style="solid"
			border-color="--color-primary"
		>
			<Override slot="SectionContent" align-items="flex-start" flex-direction="column" />
			<Text
				as="h2"
				font="--headline1"
				md-font="--headline2"
				margin="20px 0 0 0"
				width="33.33%"
				color="--light"
			>
				Введение в Quarkly
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="20px 0 0 0"
				width="66.66%"
				color="--lightD2"
			>
				Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake. I’m a great space for you to tell a story and let your site visitors know more about you. Talk about your business and what products and services you offer. Share how you came up with the idea for your company and what makes you different from your competitors. Make your business stand out and show your visitors who you are.
			</Text>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				ШАг 1 из 5
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
			>
				Добавьте элементы
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
			>
				Чтобы начать, откройте панель слоев, переключитесь на вкладку Components, затем перетащите элементы на рабочую область.
			</Text>
			<Box display="flex" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Откройте панель слоев, переключитесь на вкладку Components, выберите{" "}
								<Image
									width="24px"
									height="24px"
									vertical-align="top"
									src="https://artemzhigalin.ru/src/onboarding-tutorial-box.svg"
									margin="0px 2px 0px 2px"
								/>
								<Span
									color="--primary"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Box
								</Span>
								{" "}схватите его и бросьте в Рабочую область.
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-1-1-dragdrop.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						quarkly-title="Item 2"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							2
						</Text>
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 8px 0px"
								width="100%"
								color="--darkL2"
							>
								Затем бросьте внутрь{" "}
								<Image
									width="24px"
									height="24px"
									vertical-align="top"
									src="https://artemzhigalin.ru/src/onboarding-tutorial-box.svg"
									margin="0px 2px 0px 2px"
								/>
								<Span
									color="--primary"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Box
								</Span>
								{" "}следующие элементы сохраняя порядок:
							</Text>
							<List width="100%" box-sizing="border-box" list-style-type="none" padding="0px 0px 0px 0px">
								<Box display="flex" align-items="center" margin="0px 0px 4px 0px">
									<Icon category="bs" icon={BsDot} />
									<Image
										width="24px"
										height="24px"
										vertical-align="top"
										src="https://artemzhigalin.ru/src/onboarding-tutorial-icon.svg"
										margin="0px 4px 0px 2px"
									/>
									<Text
										display="block"
										font="--base"
										color="--primary"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										margin="0px 0px 0px 0px"
									>
										Icon
									</Text>
								</Box>
								<Box display="flex" align-items="center" margin="0px 0px 4px 0px">
									<Icon category="bs" icon={BsDot} />
									<Image
										width="24px"
										height="24px"
										vertical-align="top"
										src="https://artemzhigalin.ru/src/onboarding-tutorial-text.svg"
										margin="0px 4px 0px 2px"
									/>
									<Text
										display="block"
										font="--base"
										color="--primary"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										margin="0px 0px 0px 0px"
									>
										Text
									</Text>
								</Box>
								<Box display="flex" align-items="center" margin="0px 0px 4px 0px">
									<Icon category="bs" icon={BsDot} />
									<Image
										width="24px"
										height="24px"
										vertical-align="top"
										src="https://artemzhigalin.ru/src/onboarding-tutorial-text.svg"
										margin="0px 4px 0px 2px"
									/>
									<Text
										display="block"
										font="--base"
										color="--primary"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										margin="0px 0px 0px 0px"
									>
										Text
									</Text>
								</Box>
								<Box display="flex" align-items="center" margin="0px 0px 4px 0px">
									<Icon category="bs" icon={BsDot} />
									<Image
										width="24px"
										height="24px"
										vertical-align="top"
										src="https://artemzhigalin.ru/src/onboarding-tutorial-button.svg"
										margin="0px 4px 0px 2px"
									/>
									<Text
										display="block"
										font="--base"
										color="--primary"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										margin="0px 0px 0px 0px"
									>
										Button
									</Text>
								</Box>
							</List>
							<Text
								display="block"
								font="--base"
								margin="20px 0px 8px 0px"
								width="100%"
								color="--darkL2"
							>
								Первый элемент
								<Image
									width="24px"
									height="24px"
									vertical-align="top"
									src="https://artemzhigalin.ru/src/onboarding-tutorial-text.svg"
									margin="0px 2px 0px 2px"
								/>
								<Span
									color="--primary"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Text
								</Span>
								{"  "}будет заголовком, а второй описанием карточки.
							</Text>
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							3
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Кликните два раза на элементы, и измените текст как в примере.
						</Text>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						РАБОЧАЯ ОБЛАСТЬ
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						margin="0px 0px 20px 0px"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						padding="30px 30px 30px 30px"
						min-height="320px"
						text-align="left"
					/>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						ПРИМЕР
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box width="100%">
							<Icon category="md" icon={MdFace} size="64зч" />
							<Text>
								Лес и горы
							</Text>
							<Text>
								Удивительное путешествие по лесам и горам оздоровит вас и запомниться на всю жизнь
							</Text>
							<Button>
								Присоединиться
							</Button>
							<Hr />
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				ШАг 2 из 5
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
				letter-spacing="1px"
			>
				Стилизуйте фон
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
			>
				Теперь когда мы создали структуру карточки, давайте немного украсим её: добавим фон, скруглим углы
			</Text>
			<Box display="flex" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Выберите{" "}
								<Image
									width="24px"
									height="24px"
									vertical-align="top"
									src="https://artemzhigalin.ru/src/onboarding-tutorial-box.svg"
									margin="0px 2px 0px 2px"
								/>
								<Span
									color="--primary"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Box
								</Span>
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-1-1-dragdrop.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						quarkly-title="Item 2"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							2
						</Text>
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Перейдите в панель Styles в раздел Layout и задайте свойству Width 100%, а Height 320px
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-2-1-wh.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							3
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Теперь сохраняя выделение Box перейдите в раздел Backgrounds, кликните в поле ввода, чтобы открыть панель, выберите Type URL и введите адрес изображения:{" "}
						</Text>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							4
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Кликните два раза на элементы, и измените текст как в примере.
						</Text>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						РАБОЧАЯ ОБЛАСТЬ
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						margin="0px 0px 20px 0px"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						padding="30px 30px 30px 30px"
						min-height="320px"
						text-align="left"
					/>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						ПРИМЕР
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box width="100%" background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/cover" border-radius="12px" height="320px">
							<Icon category="md" icon={MdFace} />
							<Text>
								Лес и горы
							</Text>
							<Text>
								Удивительное путешествие по лесам и горам оздоровит вас и запомниться на всю жизнь
							</Text>
							<Button>
								Присоединиться
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				ШАг 3 из 5
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
			>
				Стилизуйте текст и кнопку
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
			>
				Попрактикуемся в новых навыках стилизации и оформим кнопку и текст так как показано в примере
			</Text>
			<Box display="flex" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Оформите ваши заголовок и описание в соответствии с примером. На этот раз воспользуйтесь вкладкой Typography
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-1-1-dragdrop.svg" border-radius="4px" />
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								ПОДСКАЗКА: Можно скопировать стили из примера используя горячие клавиши: для Mac: cmd+alt+c и cmd+alt+v, для Windows: ctrl+alt+c и ctrl+alt+v.
							</Text>
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						quarkly-title="Item 2"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							2
						</Text>
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Теперь стилизуем{" "}
								<Span
									color="--primary"
									hyphens="manual"
									overflow-wrap="normal"
									text-indent="0"
									text-overflow="clip"
									white-space="normal"
									word-break="normal"
								>
									Button
								</Span>
								. Изменим свойства: Color, Background и Border radius. Color мы изменяли только что, а Background и Border на предыдущем шаге.{" "}
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-2-1-wh.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							3
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Добавим{" "}
							<Span
								color="--primary"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Button
							</Span>
							{" "}тень. Для этого откроем вкладку Effects и свойство Box shadow. Значение скопируйте из примера.
						</Text>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							4
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Наконец добавим{" "}
							<Span
								color="--primary"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Button
							</Span>
							{" "}отступы . Добавьте margin 25px в верхнее поле, а  padding 50px в боковые и 15px в верхнее и нижнее поля.
						</Text>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						РАБОЧАЯ ОБЛАСТЬ
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						margin="0px 0px 20px 0px"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						padding="30px 30px 30px 30px"
						min-height="320px"
						text-align="left"
					/>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						ПРИМЕР
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box width="100%" background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/cover" border-radius="12px" height="320px">
							<Icon category="md" icon={MdFace} />
							<Text font="--headline2" text-transform="uppercase" color="--light" text-align="center">
								Лес и горы
							</Text>
							<Text font="--lead" color="--lightD2" text-align="center">
								Удивительное путешествие по лесам и горам оздоровит вас и запомниться на всю жизнь
							</Text>
							<Button
								background="--color-secondary"
								color="--darkL2"
								padding="12px 34px 12px 34px"
								border-radius="24px"
								text-transform="uppercase"
								letter-spacing="1.2px"
								margin="24px 0px 0px 0px"
								box-shadow="0 12px 3px -4px rgba(3, 18, 7, 0.3)"
								opacity="1"
							>
								Присоединиться
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				ШАг 4 из 5
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
			>
				Поменяйте иконку и шрифт
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
			>
				Зададим заголовку выразительный шрифт и поменяем иконку на более подходящую
			</Text>
			<Box display="flex" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Выберите заголовок, в панели стилей перейдите во вкладку Typography и нажмите на иконку  . Вы разорвали связь со значением из «темы», теперь добавим в проект новый шрифт. Для этого кликните на значение чтобы открыть панель. На панели нажмите на кнопку Add google fonts.{" "}
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-1-1-dragdrop.svg" border-radius="4px" />
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								В{" "}
								<Strong
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									модальном окне
								</Strong>
								{" "}
								<Span
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									<Span
										font="300 24px/24px --fontFamily-sans"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										выберите
									</Span>
								</Span>
								{" "}Open{" "}
								<Em
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Sans
								</Em>
								{" "}Condenced и  на него. Закрывайте окно и выбирайте его для поля Family.
							</Text>
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Теперь стилизуем{" "}
								<Span
									color="--primary"
									hyphens="manual"
									overflow-wrap="normal"
									text-indent="0"
									text-overflow="clip"
									white-space="normal"
									word-break="normal"
								>
									Button
								</Span>
								. Изменим свойства: Color, Background и Border radius. Color мы изменяли только что, а Background и Border на предыдущем шаге.{" "}
							</Text>
							<Link
								href="ya.ru"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								кликните
							</Link>
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						quarkly-title="Item 2"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							2
						</Text>
						<Box width="100%">
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-2-1-wh.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							3
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Добавим{" "}
							<Span
								color="--primary"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Button
							</Span>
							{" "}тень. Для этого откроем вкладку Effects и свойство Box shadow. Значение скопируйте из примера.
						</Text>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							4
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Наконец добавим{" "}
							<Span
								color="--primary"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Button
							</Span>
							{" "}отступы . Добавьте margin 25px в верхнее поле, а  padding 50px в боковые и 15px в верхнее и нижнее поля.
						</Text>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						РАБОЧАЯ ОБЛАСТЬ
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						margin="0px 0px 20px 0px"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						padding="30px 30px 30px 30px"
						min-height="320px"
						text-align="left"
					/>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						ПРИМЕР
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box width="100%" background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/cover" border-radius="12px" height="320px">
							<Icon category="fa" icon={FaTree} font="64px sans-serif" color="--light" />
							<Text font="normal 500 42px/1.2 --fontFamily-googleOpenSansCondensed" text-transform="uppercase" color="--light" text-align="center">
								Лес и горы
							</Text>
							<Text font="--lead" color="--lightD2" text-align="center">
								Удивительное путешествие по лесам и горам оздоровит вас и запомниться на всю жизнь
							</Text>
							<Button
								background="--color-secondary"
								color="--darkL2"
								padding="12px 34px 12px 34px"
								border-radius="24px"
								text-transform="uppercase"
								letter-spacing="1.2px"
								margin="24px 0px 0px 0px"
								box-shadow="0 12px 3px -4px rgba(3, 18, 7, 0.3)"
								opacity="1"
							>
								Присоединиться
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				ШАг 5 из 5
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
			>
				Центрируйте элементы{" "}
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
			>
				По умолчанию элементы выравниваются по верхнему левому краю.  Сделаем их по центру{" "}
				<Span
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					color="--primary"
				>
					Box
				</Span>
				{" "}c помощью display flex
			</Text>
			<Box display="flex" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Выберите{" "}
								<Span
									color="--primary"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Box
								</Span>
								{" "}на странице и откройте вкладку Layouts на панели Styles. Укажите свойству display значение flex. Это значит, что Box будет использовать flexbox —более удобный способ для выравнивания элементов.
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-1-1-dragdrop.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						quarkly-title="Item 2"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							2
						</Text>
						<Box width="100%">
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-2-1-wh.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							3
						</Text>
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Выберите значение center для свойств Align items и Justify content.
							</Text>
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								ПОДСКАЗКА: Поиграйтесь с различными значениями, чтобы понять как это работает.
							</Text>
						</Box>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						РАБОЧАЯ ОБЛАСТЬ
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						margin="0px 0px 20px 0px"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						padding="30px 30px 30px 30px"
						min-height="320px"
						text-align="left"
					>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
					</Box>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						ПРИМЕР
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box
							width="100%"
							background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/cover"
							border-radius="12px"
							height="320px"
							display="flex"
							flex-direction="column"
							align-items="center"
							justify-content="center"
							padding="48px 36px 72px 36px"
							opacity="1"
						>
							<Icon category="fa" icon={FaTree} font="64px sans-serif" color="--light" />
							<Text font="normal 500 48px/1.2 --fontFamily-googleOpenSansCondensed" text-transform="uppercase" color="--light" text-align="center">
								Лес и горы
							</Text>
							<Text font="--lead" color="--lightD2" text-align="center">
								Удивительное путешествие по лесам и горам оздоровит вас и запомниться на всю жизнь
							</Text>
							<Button
								background="--color-secondary"
								color="--darkL2"
								padding="12px 34px 12px 34px"
								border-radius="24px"
								text-transform="uppercase"
								letter-spacing="1.2px"
								margin="24px 0px 0px 0px"
								opacity="1"
								box-shadow="0 12px 3px -4px rgba(3, 18, 7, 0.3)"
							>
								Присоединиться
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				СУПЕРИГРА!
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
			>
				Отличная работа!
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
			>
				Вы создали первую карточку и изучили фундаментальные принципы веб-дизайна. Настало время проверить свои силы!
			</Text>
			<Box display="flex" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 8px 0px"
								width="100%"
								color="--darkL2"
							>
								Мы подготовили другую карточку для вас чтобы вы создали самостоятельно. Если вы что-то забыли, прокрутите наверх и всё вспомнится! Хорошего дизайна!
							</Text>
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								ПОДСКАЗКА: Выбирайте элементы в примере и смотрите их стили.
							</Text>
						</Box>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						РАБОЧАЯ ОБЛАСТЬ
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						margin="0px 0px 20px 0px"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						padding="30px 30px 30px 30px"
						min-height="320px"
						text-align="left"
					/>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						ПРИМЕР
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box
							width="100%"
							background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/cover"
							border-radius="8px"
							height="320px"
							display="flex"
							flex-direction="column"
							align-items="center"
							justify-content="center"
							padding="48px 36px 72px 36px"
							opacity="1"
						>
							<Icon category="fa" icon={FaTree} font="64px sans-serif" color="--light" />
							<Text
								font="normal 500 48px/1.2 --fontFamily-googleOpenSansCondensed"
								text-transform="uppercase"
								color="--light"
								text-align="center"
								margin="16px 0px 0px 0px"
							>
								Лес и горы
							</Text>
							<Text font="--lead" color="--lightD2" text-align="center">
								Удивительное путешествие по лесам и горам оздоровит вас и запомниться на всю жизнь
							</Text>
							<Button
								background="--color-secondary"
								color="--darkL2"
								padding="12px 34px 12px 34px"
								border-radius="24px"
								text-transform="uppercase"
								letter-spacing="1.2px"
								margin="24px 0px 0px 0px"
								opacity="1"
								box-shadow="0 12px 3px -4px rgba(3, 18, 7, 0.3)"
							>
								Присоединиться
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				Идем дальше
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
			>
				Переходите на следующий шаг
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 0px 0"
				width="50%"
				color="--darkL2"
			>
				Вы отлично справились с первым шагом к знакомству с Quarkly. На следующем шаге вы углубите свои знания и приобретете навыки:
			</Text>
			<List margin="0px 0px 16px 0px">
				<Text font="--base">
					На что влияют другие свойства элементов;
				</Text>
				<Text font="--base">
					Как стилизовать состояния: hover, focused и другие;
				</Text>
				<Text font="--base">
					Как делать адаптивный дизайн;
				</Text>
				<Text font="--base">
					Как подключать шрифты из Google Fonts.
				</Text>
			</List>
			<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-1-1-dragdrop.svg" border-radius="4px" max-width="540px" />
		</Section>
		<Section
			padding="130px 0px 100px 0px"
			sm-padding="40px 0"
			background="--color-darkL2"
			border-width="0px 0px 3px 0px"
			border-style="solid"
			border-color="--color-primary"
		>
			<Override slot="SectionContent" align-items="flex-start" flex-direction="column" />
			<Text
				as="h2"
				font="--headline1"
				md-font="--headline2"
				margin="20px 0 0 0"
				width="33.33%"
				color="--light"
			>
				Введение в Quarkly
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="20px 0 0 0"
				width="66.66%"
				color="--lightD2"
			>
				Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake. I’m a great space for you to tell a story and let your site visitors know more about you. Talk about your business and what products and services you offer. Share how you came up with the idea for your company and what makes you different from your competitors. Make your business stand out and show your visitors who you are.
			</Text>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				ШАг 1 из 5
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
			>
				Добавьте элементы
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
			>
				Чтобы начать, откройте панель слоев, переключитесь на вкладку Components, затем перетащите элементы на рабочую область.
			</Text>
			<Box display="flex" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Откройте панель слоев, переключитесь на вкладку Components, выберите{" "}
								<Image
									width="24px"
									height="24px"
									vertical-align="top"
									src="https://artemzhigalin.ru/src/onboarding-tutorial-box.svg"
									margin="0px 2px 0px 2px"
								/>
								<Span
									color="--primary"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Box
								</Span>
								{" "}схватите его и бросьте в Рабочую область.
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-1-1-dragdrop.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						quarkly-title="Item 2"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							2
						</Text>
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 8px 0px"
								width="100%"
								color="--darkL2"
							>
								Затем бросьте внутрь{" "}
								<Image
									width="24px"
									height="24px"
									vertical-align="top"
									src="https://artemzhigalin.ru/src/onboarding-tutorial-box.svg"
									margin="0px 2px 0px 2px"
								/>
								<Span
									color="--primary"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Box
								</Span>
								{" "}следующие элементы сохраняя порядок:
							</Text>
							<List width="100%" box-sizing="border-box" list-style-type="none" padding="0px 0px 0px 0px">
								<Box display="flex" align-items="center" margin="0px 0px 4px 0px">
									<Icon category="bs" icon={BsDot} />
									<Image
										width="24px"
										height="24px"
										vertical-align="top"
										src="https://artemzhigalin.ru/src/onboarding-tutorial-icon.svg"
										margin="0px 4px 0px 2px"
									/>
									<Text
										display="block"
										font="--base"
										color="--primary"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										margin="0px 0px 0px 0px"
									>
										Icon
									</Text>
								</Box>
								<Box display="flex" align-items="center" margin="0px 0px 4px 0px">
									<Icon category="bs" icon={BsDot} />
									<Image
										width="24px"
										height="24px"
										vertical-align="top"
										src="https://artemzhigalin.ru/src/onboarding-tutorial-text.svg"
										margin="0px 4px 0px 2px"
									/>
									<Text
										display="block"
										font="--base"
										color="--primary"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										margin="0px 0px 0px 0px"
									>
										Text
									</Text>
								</Box>
								<Box display="flex" align-items="center" margin="0px 0px 4px 0px">
									<Icon category="bs" icon={BsDot} />
									<Image
										width="24px"
										height="24px"
										vertical-align="top"
										src="https://artemzhigalin.ru/src/onboarding-tutorial-text.svg"
										margin="0px 4px 0px 2px"
									/>
									<Text
										display="block"
										font="--base"
										color="--primary"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										margin="0px 0px 0px 0px"
									>
										Text
									</Text>
								</Box>
								<Box display="flex" align-items="center" margin="0px 0px 4px 0px">
									<Icon category="bs" icon={BsDot} />
									<Image
										width="24px"
										height="24px"
										vertical-align="top"
										src="https://artemzhigalin.ru/src/onboarding-tutorial-button.svg"
										margin="0px 4px 0px 2px"
									/>
									<Text
										display="block"
										font="--base"
										color="--primary"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										margin="0px 0px 0px 0px"
									>
										Button
									</Text>
								</Box>
							</List>
							<Text
								display="block"
								font="--base"
								margin="20px 0px 8px 0px"
								width="100%"
								color="--darkL2"
							>
								Первый элемент
								<Image
									width="24px"
									height="24px"
									vertical-align="top"
									src="https://artemzhigalin.ru/src/onboarding-tutorial-text.svg"
									margin="0px 2px 0px 2px"
								/>
								<Span
									color="--primary"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Text
								</Span>
								{"  "}будет заголовком, а второй описанием карточки.
							</Text>
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							3
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Кликните два раза на элементы, и измените текст как в примере.
						</Text>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						РАБОЧАЯ ОБЛАСТЬ
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						margin="0px 0px 20px 0px"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						padding="30px 30px 30px 30px"
						min-height="320px"
						text-align="left"
					/>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						ПРИМЕР
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box width="100%">
							<Icon category="md" icon={MdFace} size="64зч" />
							<Text>
								Лес и горы
							</Text>
							<Text>
								Удивительное путешествие по лесам и горам оздоровит вас и запомниться на всю жизнь
							</Text>
							<Button>
								Присоединиться
							</Button>
							<Hr />
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				ШАг 2 из 5
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
				letter-spacing="1px"
			>
				Стилизуйте фон
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
			>
				Теперь когда мы создали структуру карточки, давайте немного украсим её: добавим фон, скруглим углы
			</Text>
			<Box display="flex" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Выберите{" "}
								<Image
									width="24px"
									height="24px"
									vertical-align="top"
									src="https://artemzhigalin.ru/src/onboarding-tutorial-box.svg"
									margin="0px 2px 0px 2px"
								/>
								<Span
									color="--primary"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Box
								</Span>
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-1-1-dragdrop.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						quarkly-title="Item 2"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							2
						</Text>
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Перейдите в панель Styles в раздел Layout и задайте свойству Width 100%, а Height 320px
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-2-1-wh.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							3
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Теперь сохраняя выделение Box перейдите в раздел Backgrounds, кликните в поле ввода, чтобы открыть панель, выберите Type URL и введите адрес изображения:{" "}
						</Text>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							4
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Кликните два раза на элементы, и измените текст как в примере.
						</Text>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						РАБОЧАЯ ОБЛАСТЬ
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						margin="0px 0px 20px 0px"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						padding="30px 30px 30px 30px"
						min-height="320px"
						text-align="left"
					/>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						ПРИМЕР
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box width="100%" background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/cover" border-radius="12px" height="320px">
							<Icon category="md" icon={MdFace} />
							<Text>
								Лес и горы
							</Text>
							<Text>
								Удивительное путешествие по лесам и горам оздоровит вас и запомниться на всю жизнь
							</Text>
							<Button>
								Присоединиться
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				ШАг 3 из 5
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
			>
				Стилизуйте текст и кнопку
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
			>
				Попрактикуемся в новых навыках стилизации и оформим кнопку и текст так как показано в примере
			</Text>
			<Box display="flex" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Оформите ваши заголовок и описание в соответствии с примером. На этот раз воспользуйтесь вкладкой Typography
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-1-1-dragdrop.svg" border-radius="4px" />
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								ПОДСКАЗКА: Можно скопировать стили из примера используя горячие клавиши: для Mac: cmd+alt+c и cmd+alt+v, для Windows: ctrl+alt+c и ctrl+alt+v.
							</Text>
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						quarkly-title="Item 2"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							2
						</Text>
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Теперь стилизуем{" "}
								<Span
									color="--primary"
									hyphens="manual"
									overflow-wrap="normal"
									text-indent="0"
									text-overflow="clip"
									white-space="normal"
									word-break="normal"
								>
									Button
								</Span>
								. Изменим свойства: Color, Background и Border radius. Color мы изменяли только что, а Background и Border на предыдущем шаге.{" "}
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-2-1-wh.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							3
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Добавим{" "}
							<Span
								color="--primary"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Button
							</Span>
							{" "}тень. Для этого откроем вкладку Effects и свойство Box shadow. Значение скопируйте из примера.
						</Text>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							4
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Наконец добавим{" "}
							<Span
								color="--primary"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Button
							</Span>
							{" "}отступы . Добавьте margin 25px в верхнее поле, а  padding 50px в боковые и 15px в верхнее и нижнее поля.
						</Text>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						РАБОЧАЯ ОБЛАСТЬ
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						margin="0px 0px 20px 0px"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						padding="30px 30px 30px 30px"
						min-height="320px"
						text-align="left"
					/>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						ПРИМЕР
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box width="100%" background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/cover" border-radius="12px" height="320px">
							<Icon category="md" icon={MdFace} />
							<Text font="--headline2" text-transform="uppercase" color="--light" text-align="center">
								Лес и горы
							</Text>
							<Text font="--lead" color="--lightD2" text-align="center">
								Удивительное путешествие по лесам и горам оздоровит вас и запомниться на всю жизнь
							</Text>
							<Button
								background="--color-secondary"
								color="--darkL2"
								padding="12px 34px 12px 34px"
								border-radius="24px"
								text-transform="uppercase"
								letter-spacing="1.2px"
								margin="24px 0px 0px 0px"
								box-shadow="0 12px 3px -4px rgba(3, 18, 7, 0.3)"
								opacity="1"
							>
								Присоединиться
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				ШАг 4 из 5
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
			>
				Поменяйте иконку и шрифт
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
			>
				Зададим заголовку выразительный шрифт и поменяем иконку на более подходящую
			</Text>
			<Box display="flex" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Выберите заголовок, в панели стилей перейдите во вкладку Typography и нажмите на иконку  . Вы разорвали связь со значением из «темы», теперь добавим в проект новый шрифт. Для этого кликните на значение чтобы открыть панель. На панели нажмите на кнопку Add google fonts.{" "}
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-1-1-dragdrop.svg" border-radius="4px" />
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								В{" "}
								<Strong
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									модальном окне
								</Strong>
								{" "}
								<Span
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									<Span
										font="300 24px/24px --fontFamily-sans"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										выберите
									</Span>
								</Span>
								{" "}Open{" "}
								<Em
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Sans
								</Em>
								{" "}Condenced и  на него. Закрывайте окно и выбирайте его для поля Family.
							</Text>
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Теперь стилизуем{" "}
								<Span
									color="--primary"
									hyphens="manual"
									overflow-wrap="normal"
									text-indent="0"
									text-overflow="clip"
									white-space="normal"
									word-break="normal"
								>
									Button
								</Span>
								. Изменим свойства: Color, Background и Border radius. Color мы изменяли только что, а Background и Border на предыдущем шаге.{" "}
							</Text>
							<Link
								href="ya.ru"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								кликните
							</Link>
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						quarkly-title="Item 2"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							2
						</Text>
						<Box width="100%">
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-2-1-wh.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							3
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Добавим{" "}
							<Span
								color="--primary"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Button
							</Span>
							{" "}тень. Для этого откроем вкладку Effects и свойство Box shadow. Значение скопируйте из примера.
						</Text>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							4
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Наконец добавим{" "}
							<Span
								color="--primary"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Button
							</Span>
							{" "}отступы . Добавьте margin 25px в верхнее поле, а  padding 50px в боковые и 15px в верхнее и нижнее поля.
						</Text>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						РАБОЧАЯ ОБЛАСТЬ
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						margin="0px 0px 20px 0px"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						padding="30px 30px 30px 30px"
						min-height="320px"
						text-align="left"
					/>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						ПРИМЕР
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box width="100%" background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/cover" border-radius="12px" height="320px">
							<Icon category="fa" icon={FaTree} font="64px sans-serif" color="--light" />
							<Text font="normal 500 42px/1.2 --fontFamily-googleOpenSansCondensed" text-transform="uppercase" color="--light" text-align="center">
								Лес и горы
							</Text>
							<Text font="--lead" color="--lightD2" text-align="center">
								Удивительное путешествие по лесам и горам оздоровит вас и запомниться на всю жизнь
							</Text>
							<Button
								background="--color-secondary"
								color="--darkL2"
								padding="12px 34px 12px 34px"
								border-radius="24px"
								text-transform="uppercase"
								letter-spacing="1.2px"
								margin="24px 0px 0px 0px"
								box-shadow="0 12px 3px -4px rgba(3, 18, 7, 0.3)"
								opacity="1"
							>
								Присоединиться
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				ШАг 5 из 5
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
			>
				Центрируйте элементы{" "}
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
			>
				По умолчанию элементы выравниваются по верхнему левому краю.  Сделаем их по центру{" "}
				<Span
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					color="--primary"
				>
					Box
				</Span>
				{" "}c помощью display flex
			</Text>
			<Box display="flex" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Выберите{" "}
								<Span
									color="--primary"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Box
								</Span>
								{" "}на странице и откройте вкладку Layouts на панели Styles. Укажите свойству display значение flex. Это значит, что Box будет использовать flexbox —более удобный способ для выравнивания элементов.
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-1-1-dragdrop.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						quarkly-title="Item 2"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							2
						</Text>
						<Box width="100%">
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-2-1-wh.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							3
						</Text>
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Выберите значение center для свойств Align items и Justify content.
							</Text>
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								ПОДСКАЗКА: Поиграйтесь с различными значениями, чтобы понять как это работает.
							</Text>
						</Box>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						РАБОЧАЯ ОБЛАСТЬ
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						margin="0px 0px 20px 0px"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						padding="30px 30px 30px 30px"
						min-height="320px"
						text-align="left"
					>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
					</Box>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						ПРИМЕР
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box
							width="100%"
							background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/cover"
							border-radius="12px"
							height="320px"
							display="flex"
							flex-direction="column"
							align-items="center"
							justify-content="center"
							padding="48px 36px 72px 36px"
							opacity="1"
						>
							<Icon category="fa" icon={FaTree} font="64px sans-serif" color="--light" />
							<Text font="normal 500 48px/1.2 --fontFamily-googleOpenSansCondensed" text-transform="uppercase" color="--light" text-align="center">
								Лес и горы
							</Text>
							<Text font="--lead" color="--lightD2" text-align="center">
								Удивительное путешествие по лесам и горам оздоровит вас и запомниться на всю жизнь
							</Text>
							<Button
								background="--color-secondary"
								color="--darkL2"
								padding="12px 34px 12px 34px"
								border-radius="24px"
								text-transform="uppercase"
								letter-spacing="1.2px"
								margin="24px 0px 0px 0px"
								opacity="1"
								box-shadow="0 12px 3px -4px rgba(3, 18, 7, 0.3)"
							>
								Присоединиться
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				СУПЕРИГРА!
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
			>
				Отличная работа!
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
			>
				Вы создали первую карточку и изучили фундаментальные принципы веб-дизайна. Настало время проверить свои силы!
			</Text>
			<Box display="flex" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 8px 0px"
								width="100%"
								color="--darkL2"
							>
								Мы подготовили другую карточку для вас чтобы вы создали самостоятельно. Если вы что-то забыли, прокрутите наверх и всё вспомнится! Хорошего дизайна!
							</Text>
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								ПОДСКАЗКА: Выбирайте элементы в примере и смотрите их стили.
							</Text>
						</Box>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						РАБОЧАЯ ОБЛАСТЬ
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						margin="0px 0px 20px 0px"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						padding="30px 30px 30px 30px"
						min-height="320px"
						text-align="left"
					/>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						ПРИМЕР
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box
							width="100%"
							background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/cover"
							border-radius="8px"
							height="320px"
							display="flex"
							flex-direction="column"
							align-items="center"
							justify-content="center"
							padding="48px 36px 72px 36px"
							opacity="1"
						>
							<Icon category="fa" icon={FaTree} font="64px sans-serif" color="--light" />
							<Text
								font="normal 500 48px/1.2 --fontFamily-googleOpenSansCondensed"
								text-transform="uppercase"
								color="--light"
								text-align="center"
								margin="16px 0px 0px 0px"
							>
								Лес и горы
							</Text>
							<Text font="--lead" color="--lightD2" text-align="center">
								Удивительное путешествие по лесам и горам оздоровит вас и запомниться на всю жизнь
							</Text>
							<Button
								background="--color-secondary"
								color="--darkL2"
								padding="12px 34px 12px 34px"
								border-radius="24px"
								text-transform="uppercase"
								letter-spacing="1.2px"
								margin="24px 0px 0px 0px"
								opacity="1"
								box-shadow="0 12px 3px -4px rgba(3, 18, 7, 0.3)"
							>
								Присоединиться
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				Идем дальше
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
			>
				Переходите на следующий шаг
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 0px 0"
				width="50%"
				color="--darkL2"
			>
				Вы отлично справились с первым шагом к знакомству с Quarkly. На следующем шаге вы углубите свои знания и приобретете навыки:
			</Text>
			<List margin="0px 0px 16px 0px">
				<Text font="--base">
					На что влияют другие свойства элементов;
				</Text>
				<Text font="--base">
					Как стилизовать состояния: hover, focused и другие;
				</Text>
				<Text font="--base">
					Как делать адаптивный дизайн;
				</Text>
				<Text font="--base">
					Как подключать шрифты из Google Fonts.
				</Text>
			</List>
			<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-1-1-dragdrop.svg" border-radius="4px" max-width="540px" />
		</Section>
		<Section
			padding="130px 0px 100px 0px"
			sm-padding="40px 0"
			background="--color-darkL2"
			border-width="0px 0px 3px 0px"
			border-style="solid"
			border-color="--color-primary"
		>
			<Override slot="SectionContent" align-items="flex-start" flex-direction="column" />
			<Text
				as="h2"
				font="--headline1"
				md-font="--headline2"
				margin="20px 0 0 0"
				width="33.33%"
				color="--light"
			>
				Введение в Quarkly
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="20px 0 0 0"
				width="66.66%"
				color="--lightD2"
			>
				Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake. I’m a great space for you to tell a story and let your site visitors know more about you. Talk about your business and what products and services you offer. Share how you came up with the idea for your company and what makes you different from your competitors. Make your business stand out and show your visitors who you are.
			</Text>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				ШАг 1 из 5
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
			>
				Добавьте элементы
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
			>
				Чтобы начать, откройте панель слоев, переключитесь на вкладку Components, затем перетащите элементы на рабочую область.
			</Text>
			<Box display="flex" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Откройте панель слоев, переключитесь на вкладку Components, выберите{" "}
								<Image
									width="24px"
									height="24px"
									vertical-align="top"
									src="https://artemzhigalin.ru/src/onboarding-tutorial-box.svg"
									margin="0px 2px 0px 2px"
								/>
								<Span
									color="--primary"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Box
								</Span>
								{" "}схватите его и бросьте в Рабочую область.
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-1-1-dragdrop.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						quarkly-title="Item 2"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							2
						</Text>
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 8px 0px"
								width="100%"
								color="--darkL2"
							>
								Затем бросьте внутрь{" "}
								<Image
									width="24px"
									height="24px"
									vertical-align="top"
									src="https://artemzhigalin.ru/src/onboarding-tutorial-box.svg"
									margin="0px 2px 0px 2px"
								/>
								<Span
									color="--primary"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Box
								</Span>
								{" "}следующие элементы сохраняя порядок:
							</Text>
							<List width="100%" box-sizing="border-box" list-style-type="none" padding="0px 0px 0px 0px">
								<Box display="flex" align-items="center" margin="0px 0px 4px 0px">
									<Icon category="bs" icon={BsDot} />
									<Image
										width="24px"
										height="24px"
										vertical-align="top"
										src="https://artemzhigalin.ru/src/onboarding-tutorial-icon.svg"
										margin="0px 4px 0px 2px"
									/>
									<Text
										display="block"
										font="--base"
										color="--primary"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										margin="0px 0px 0px 0px"
									>
										Icon
									</Text>
								</Box>
								<Box display="flex" align-items="center" margin="0px 0px 4px 0px">
									<Icon category="bs" icon={BsDot} />
									<Image
										width="24px"
										height="24px"
										vertical-align="top"
										src="https://artemzhigalin.ru/src/onboarding-tutorial-text.svg"
										margin="0px 4px 0px 2px"
									/>
									<Text
										display="block"
										font="--base"
										color="--primary"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										margin="0px 0px 0px 0px"
									>
										Text
									</Text>
								</Box>
								<Box display="flex" align-items="center" margin="0px 0px 4px 0px">
									<Icon category="bs" icon={BsDot} />
									<Image
										width="24px"
										height="24px"
										vertical-align="top"
										src="https://artemzhigalin.ru/src/onboarding-tutorial-text.svg"
										margin="0px 4px 0px 2px"
									/>
									<Text
										display="block"
										font="--base"
										color="--primary"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										margin="0px 0px 0px 0px"
									>
										Text
									</Text>
								</Box>
								<Box display="flex" align-items="center" margin="0px 0px 4px 0px">
									<Icon category="bs" icon={BsDot} />
									<Image
										width="24px"
										height="24px"
										vertical-align="top"
										src="https://artemzhigalin.ru/src/onboarding-tutorial-button.svg"
										margin="0px 4px 0px 2px"
									/>
									<Text
										display="block"
										font="--base"
										color="--primary"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										margin="0px 0px 0px 0px"
									>
										Button
									</Text>
								</Box>
							</List>
							<Text
								display="block"
								font="--base"
								margin="20px 0px 8px 0px"
								width="100%"
								color="--darkL2"
							>
								Первый элемент
								<Image
									width="24px"
									height="24px"
									vertical-align="top"
									src="https://artemzhigalin.ru/src/onboarding-tutorial-text.svg"
									margin="0px 2px 0px 2px"
								/>
								<Span
									color="--primary"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Text
								</Span>
								{"  "}будет заголовком, а второй описанием карточки.
							</Text>
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							3
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Кликните два раза на элементы, и измените текст как в примере.
						</Text>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						РАБОЧАЯ ОБЛАСТЬ
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						margin="0px 0px 20px 0px"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						padding="30px 30px 30px 30px"
						min-height="320px"
						text-align="left"
					/>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						ПРИМЕР
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box width="100%">
							<Icon category="md" icon={MdFace} size="64зч" />
							<Text>
								Лес и горы
							</Text>
							<Text>
								Удивительное путешествие по лесам и горам оздоровит вас и запомниться на всю жизнь
							</Text>
							<Button>
								Присоединиться
							</Button>
							<Hr />
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				ШАг 2 из 5
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
				letter-spacing="1px"
			>
				Стилизуйте фон
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
			>
				Теперь когда мы создали asd asd  карточки, давайте немного украсим её: добавим фон, скруглим углы
			</Text>
			<Box display="flex" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Выберите{" "}
								<Image
									width="24px"
									height="24px"
									vertical-align="top"
									src="https://artemzhigalin.ru/src/onboarding-tutorial-box.svg"
									margin="0px 2px 0px 2px"
								/>
								<Span
									color="--primary"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Box
								</Span>
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-1-1-dragdrop.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						quarkly-title="Item 2"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							2
						</Text>
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Перейдите в панель Styles в раздел Layout и задайте свойству Width 100%, а Height 320px
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-2-1-wh.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							3
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Теперь сохраняя выделение Box перейдите в раздел Backgrounds, кликните в поле ввода, чтобы открыть панель, выберите Type URL и введите адрес изображения:{" "}
						</Text>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							4
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Кликните два раза на элементы, и измените текст как в примере.
						</Text>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						РАБОЧАЯ ОБЛАСТЬ
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						margin="0px 0px 20px 0px"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						padding="30px 30px 30px 30px"
						min-height="320px"
						text-align="left"
					/>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						ПРИМЕР
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box width="100%" background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/cover" border-radius="12px" height="320px">
							<Icon category="md" icon={MdFace} />
							<Text>
								Лес и горы
							</Text>
							<Text>
								Удивительное путешествие по лесам и горам оздоровит вас и запомниться на всю жизнь
							</Text>
							<Button>
								Присоединиться
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				ШАг 3 из 5
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
			>
				Стилизуйте текст и кнопку
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
			>
				Попрактикуемся в новых навыках стилизации и оформим кнопку и текст так как показано в примере
			</Text>
			<Box display="flex" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Оформите ваши заголовок и описание в соответствии с примером. На этот раз воспользуйтесь вкладкой Typography
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-1-1-dragdrop.svg" border-radius="4px" />
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								ПОДСКАЗКА: Можно скопировать стили из примера используя горячие клавиши: для Mac: cmd+alt+c и cmd+alt+v, для Windows: ctrl+alt+c и ctrl+alt+v.
							</Text>
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						quarkly-title="Item 2"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							2
						</Text>
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Теперь стилизуем{" "}
								<Span
									color="--primary"
									hyphens="manual"
									overflow-wrap="normal"
									text-indent="0"
									text-overflow="clip"
									white-space="normal"
									word-break="normal"
								>
									Button
								</Span>
								. Изменим свойства: Color, Background и Border radius. Color мы изменяли только что, а Background и Border на предыдущем шаге.{" "}
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-2-1-wh.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							3
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Добавим{" "}
							<Span
								color="--primary"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Button
							</Span>
							{" "}тень. Для этого откроем вкладку Effects и свойство Box shadow. Значение скопируйте из примера.
						</Text>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							4
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Наконец добавим{" "}
							<Span
								color="--primary"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Button
							</Span>
							{" "}отступы . Добавьте margin 25px в верхнее поле, а  padding 50px в боковые и 15px в верхнее и нижнее поля.
						</Text>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						РАБОЧАЯ ОБЛАСТЬ
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						margin="0px 0px 20px 0px"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						padding="30px 30px 30px 30px"
						min-height="320px"
						text-align="left"
					/>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						ПРИМЕР
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box width="100%" background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/cover" border-radius="12px" height="320px">
							<Icon category="md" icon={MdFace} />
							<Text font="--headline2" text-transform="uppercase" color="--light" text-align="center">
								Лес и горы
							</Text>
							<Text font="--lead" color="--lightD2" text-align="center">
								Удивительное путешествие по лесам и горам оздоровит вас и запомниться на всю жизнь
							</Text>
							<Button
								background="--color-secondary"
								color="--darkL2"
								padding="12px 34px 12px 34px"
								border-radius="24px"
								text-transform="uppercase"
								letter-spacing="1.2px"
								margin="24px 0px 0px 0px"
								box-shadow="0 12px 3px -4px rgba(3, 18, 7, 0.3)"
								opacity="1"
							>
								Присоединиться
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				ШАг 4 из 5
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
			>
				Поменяйте иконку и шрифт
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
			>
				Зададим заголовку выразительный шрифт и поменяем иконку на более подходящую
			</Text>
			<Box display="flex" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Выберите заголовок, в панели стилей перейдите во вкладку Typography и нажмите на иконку  . Вы разорвали связь со значением из «темы», теперь добавим в проект новый шрифт. Для этого кликните на значение чтобы открыть панель. На панели нажмите на кнопку Add google fonts.{" "}
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-1-1-dragdrop.svg" border-radius="4px" />
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								В{" "}
								<Strong
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									модальном окне
								</Strong>
								{" "}
								<Span
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									<Span
										font="300 24px/24px --fontFamily-sans"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										выберите
									</Span>
								</Span>
								{" "}Open{" "}
								<Em
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Sans
								</Em>
								{" "}Condenced и  на него. Закрывайте окно и выбирайте его для поля Family.
							</Text>
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Теперь стилизуем{" "}
								<Span
									color="--primary"
									hyphens="manual"
									overflow-wrap="normal"
									text-indent="0"
									text-overflow="clip"
									white-space="normal"
									word-break="normal"
								>
									Button
								</Span>
								. Изменим свойства: Color, Background и Border radius. Color мы изменяли только что, а Background и Border на предыдущем шаге.{" "}
							</Text>
							<Link
								href="ya.ru"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								кликните
							</Link>
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						quarkly-title="Item 2"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							2
						</Text>
						<Box width="100%">
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-2-1-wh.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							3
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Добавим{" "}
							<Span
								color="--primary"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Button
							</Span>
							{" "}тень. Для этого откроем вкладку Effects и свойство Box shadow. Значение скопируйте из примера.
						</Text>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							4
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Наконец добавим{" "}
							<Span
								color="--primary"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Button
							</Span>
							{" "}отступы . Добавьте margin 25px в верхнее поле, а  padding 50px в боковые и 15px в верхнее и нижнее поля.
						</Text>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						РАБОЧАЯ ОБЛАСТЬ
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						margin="0px 0px 20px 0px"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						padding="30px 30px 30px 30px"
						min-height="320px"
						text-align="left"
					/>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						ПРИМЕР
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box width="100%" background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/cover" border-radius="12px" height="320px">
							<Icon category="fa" icon={FaTree} font="64px sans-serif" color="--light" />
							<Text font="normal 500 42px/1.2 --fontFamily-googleOpenSansCondensed" text-transform="uppercase" color="--light" text-align="center">
								Лес и горы
							</Text>
							<Text font="--lead" color="--lightD2" text-align="center">
								Удивительное путешествие по лесам и горам оздоровит вас и запомниться на всю жизнь
							</Text>
							<Button
								background="--color-secondary"
								color="--darkL2"
								padding="12px 34px 12px 34px"
								border-radius="24px"
								text-transform="uppercase"
								letter-spacing="1.2px"
								margin="24px 0px 0px 0px"
								box-shadow="0 12px 3px -4px rgba(3, 18, 7, 0.3)"
								opacity="1"
							>
								Присоединиться
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				ШАг 5 из 5
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
			>
				Центрируйте элементы{" "}
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
			>
				По умолчанию элементы выравниваются по верхнему левому краю.  Сделаем их по центру{" "}
				<Span
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					color="--primary"
				>
					Box
				</Span>
				{" "}c помощью display flex
			</Text>
			<Box display="flex" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Выберите{" "}
								<Span
									color="--primary"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Box
								</Span>
								{" "}на странице и откройте вкладку Layouts на панели Styles. Укажите свойству display значение flex. Это значит, что Box будет использовать flexbox —более удобный способ для выравнивания элементов.
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-1-1-dragdrop.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						quarkly-title="Item 2"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							2
						</Text>
						<Box width="100%">
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-2-1-wh.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							3
						</Text>
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Выберите значение center для свойств Align items и Justify content.
							</Text>
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								ПОДСКАЗКА: Поиграйтесь с различными значениями, чтобы понять как это работает.
							</Text>
						</Box>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						РАБОЧАЯ ОБЛАСТЬ
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						margin="0px 0px 20px 0px"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						padding="30px 30px 30px 30px"
						min-height="320px"
						text-align="left"
					>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
					</Box>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						ПРИМЕР
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box
							width="100%"
							background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/cover"
							border-radius="12px"
							height="320px"
							display="flex"
							flex-direction="column"
							align-items="center"
							justify-content="center"
							padding="48px 36px 72px 36px"
							opacity="1"
						>
							<Icon category="fa" icon={FaTree} font="64px sans-serif" color="--light" />
							<Text font="normal 500 48px/1.2 --fontFamily-googleOpenSansCondensed" text-transform="uppercase" color="--light" text-align="center">
								Лес и горы
							</Text>
							<Text font="--lead" color="--lightD2" text-align="center">
								Удивительное путешествие по лесам и горам оздоровит вас и запомниться на всю жизнь
							</Text>
							<Button
								background="--color-secondary"
								color="--darkL2"
								padding="12px 34px 12px 34px"
								border-radius="24px"
								text-transform="uppercase"
								letter-spacing="1.2px"
								margin="24px 0px 0px 0px"
								opacity="1"
								box-shadow="0 12px 3px -4px rgba(3, 18, 7, 0.3)"
							>
								Присоединиться
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				СУПЕРИГРА!
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
			>
				Отличная работа!
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
			>
				Вы создали первую карточку и изучили фундаментальные принципы веб-дизайна. Настало время проверить свои силы!
			</Text>
			<Box display="flex" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 8px 0px"
								width="100%"
								color="--darkL2"
							>
								Мы подготовили другую карточку для вас чтобы вы создали самостоятельно. Если вы что-то забыли, прокрутите наверх и всё вспомнится! Хорошего дизайна!
							</Text>
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								ПОДСКАЗКА: Выбирайте элементы в примере и смотрите их стили.
							</Text>
						</Box>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						РАБОЧАЯ ОБЛАСТЬ
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						margin="0px 0px 20px 0px"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						padding="30px 30px 30px 30px"
						min-height="320px"
						text-align="left"
					/>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						ПРИМЕР
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box
							width="100%"
							background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/cover"
							border-radius="8px"
							height="320px"
							display="flex"
							flex-direction="column"
							align-items="center"
							justify-content="center"
							padding="48px 36px 72px 36px"
							opacity="1"
						>
							<Icon category="fa" icon={FaTree} font="64px sans-serif" color="--light" />
							<Text
								font="normal 500 48px/1.2 --fontFamily-googleOpenSansCondensed"
								text-transform="uppercase"
								color="--light"
								text-align="center"
								margin="16px 0px 0px 0px"
							>
								Лес и горы
							</Text>
							<Text font="--lead" color="--lightD2" text-align="center">
								Удивительное путешествие по лесам и горам оздоровит вас и запомниться на всю жизнь
							</Text>
							<Button
								background="--color-secondary"
								color="--darkL2"
								padding="12px 34px 12px 34px"
								border-radius="24px"
								text-transform="uppercase"
								letter-spacing="1.2px"
								margin="24px 0px 0px 0px"
								opacity="1"
								box-shadow="0 12px 3px -4px rgba(3, 18, 7, 0.3)"
							>
								Присоединиться
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				Идем дальше
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
			>
				Переходите на следующий шаг
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 0px 0"
				width="50%"
				color="--darkL2"
			>
				Вы отлично справились с первым шагом к знакомству с Quarkly. На следующем шаге вы углубите свои знания и приобретете навыки:
			</Text>
			<List margin="0px 0px 16px 0px">
				<Text font="--base">
					На что влияют другие свойства элементов;
				</Text>
				<Text font="--base">
					Как стилизовать состояния: hover, focused и другие;
				</Text>
				<Text font="--base">
					Как делать адаптивный дизайн;
				</Text>
				<Text font="--base">
					Как подключать шрифты из Google Fonts.
				</Text>
			</List>
			<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-1-1-dragdrop.svg" border-radius="4px" max-width="540px" />
		</Section>
		<Section
			padding="130px 0px 100px 0px"
			sm-padding="40px 0"
			background="--color-darkL2"
			border-width="0px 0px 3px 0px"
			border-style="solid"
			border-color="--color-primary"
		>
			<Override slot="SectionContent" align-items="flex-start" flex-direction="column" />
			<Text
				as="h2"
				font="--headline1"
				md-font="--headline2"
				margin="20px 0 0 0"
				width="33.33%"
				color="--light"
			>
				Введение в Quarkly
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="20px 0 0 0"
				width="66.66%"
				color="--lightD2"
			>
				Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake. I’m a great space for you to tell a story and let your site visitors know more about you. Talk about your business and what products and services you offer. Share how you came up with the idea for your company and what makes you different from your competitors. Make your business stand out and show your visitors who you are.
			</Text>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				ШАг 1 из 5
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
			>
				Добавьте элементы
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
			>
				Чтобы начать, откройте панель слоев, переключитесь на вкладку Components, затем перетащите элементы на рабочую область.
			</Text>
			<Box display="flex" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Откройте панель слоев, переключитесь на вкладку Components, выберите{" "}
								<Image
									width="24px"
									height="24px"
									vertical-align="top"
									src="https://artemzhigalin.ru/src/onboarding-tutorial-box.svg"
									margin="0px 2px 0px 2px"
								/>
								<Span
									color="--primary"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Box
								</Span>
								{" "}схватите его и бросьте в Рабочую область.
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-1-1-dragdrop.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						quarkly-title="Item 2"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							2
						</Text>
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 8px 0px"
								width="100%"
								color="--darkL2"
							>
								Затем бросьте внутрь{" "}
								<Image
									width="24px"
									height="24px"
									vertical-align="top"
									src="https://artemzhigalin.ru/src/onboarding-tutorial-box.svg"
									margin="0px 2px 0px 2px"
								/>
								<Span
									color="--primary"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Box
								</Span>
								{" "}следующие элементы сохраняя порядок:
							</Text>
							<List width="100%" box-sizing="border-box" list-style-type="none" padding="0px 0px 0px 0px">
								<Box display="flex" align-items="center" margin="0px 0px 4px 0px">
									<Icon category="bs" icon={BsDot} />
									<Image
										width="24px"
										height="24px"
										vertical-align="top"
										src="https://artemzhigalin.ru/src/onboarding-tutorial-icon.svg"
										margin="0px 4px 0px 2px"
									/>
									<Text
										display="block"
										font="--base"
										color="--primary"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										margin="0px 0px 0px 0px"
									>
										Icon
									</Text>
								</Box>
								<Box display="flex" align-items="center" margin="0px 0px 4px 0px">
									<Icon category="bs" icon={BsDot} />
									<Image
										width="24px"
										height="24px"
										vertical-align="top"
										src="https://artemzhigalin.ru/src/onboarding-tutorial-text.svg"
										margin="0px 4px 0px 2px"
									/>
									<Text
										display="block"
										font="--base"
										color="--primary"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										margin="0px 0px 0px 0px"
									>
										Text
									</Text>
								</Box>
								<Box display="flex" align-items="center" margin="0px 0px 4px 0px">
									<Icon category="bs" icon={BsDot} />
									<Image
										width="24px"
										height="24px"
										vertical-align="top"
										src="https://artemzhigalin.ru/src/onboarding-tutorial-text.svg"
										margin="0px 4px 0px 2px"
									/>
									<Text
										display="block"
										font="--base"
										color="--primary"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										margin="0px 0px 0px 0px"
									>
										Text
									</Text>
								</Box>
								<Box display="flex" align-items="center" margin="0px 0px 4px 0px">
									<Icon category="bs" icon={BsDot} />
									<Image
										width="24px"
										height="24px"
										vertical-align="top"
										src="https://artemzhigalin.ru/src/onboarding-tutorial-button.svg"
										margin="0px 4px 0px 2px"
									/>
									<Text
										display="block"
										font="--base"
										color="--primary"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										margin="0px 0px 0px 0px"
									>
										Button
									</Text>
								</Box>
							</List>
							<Text
								display="block"
								font="--base"
								margin="20px 0px 8px 0px"
								width="100%"
								color="--darkL2"
							>
								Первый элемент
								<Image
									width="24px"
									height="24px"
									vertical-align="top"
									src="https://artemzhigalin.ru/src/onboarding-tutorial-text.svg"
									margin="0px 2px 0px 2px"
								/>
								<Span
									color="--primary"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Text
								</Span>
								{"  "}будет заголовком, а второй описанием карточки.
							</Text>
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							3
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Кликните два раза на элементы, и измените текст как в примере.
						</Text>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						РАБОЧАЯ ОБЛАСТЬ
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						margin="0px 0px 20px 0px"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						padding="30px 30px 30px 30px"
						min-height="320px"
						text-align="left"
					/>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						ПРИМЕР
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box width="100%">
							<Icon category="md" icon={MdFace} size="64зч" />
							<Text>
								Лес и горы
							</Text>
							<Text>
								Удивительное путешествие по лесам и горам оздоровит вас и запомниться на всю жизнь
							</Text>
							<Button>
								Присоединиться
							</Button>
							<Hr />
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				ШАг 2 из 5
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
				letter-spacing="1px"
			>
				Стилизуйте фон
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
			>
				Теперь когда мы создали структуру карточки, давайте немного украсим её: добавим фон, скруглим углы
			</Text>
			<Box display="flex" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Выберите{" "}
								<Image
									width="24px"
									height="24px"
									vertical-align="top"
									src="https://artemzhigalin.ru/src/onboarding-tutorial-box.svg"
									margin="0px 2px 0px 2px"
								/>
								<Span
									color="--primary"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Box
								</Span>
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-1-1-dragdrop.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						quarkly-title="Item 2"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							2
						</Text>
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Перейдите в панель Styles в раздел Layout и задайте свойству Width 100%, а Height 320px
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-2-1-wh.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							3
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Теперь сохраняя выделение Box перейдите в раздел Backgrounds, кликните в поле ввода, чтобы открыть панель, выберите Type URL и введите адрес изображения:{" "}
						</Text>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							4
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Кликните два раза на элементы, и измените текст как в примере.
						</Text>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						РАБОЧАЯ ОБЛАСТЬ
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						margin="0px 0px 20px 0px"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						padding="30px 30px 30px 30px"
						min-height="320px"
						text-align="left"
					/>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						ПРИМЕР
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box width="100%" background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/cover" border-radius="12px" height="320px">
							<Icon category="md" icon={MdFace} />
							<Text>
								Лес и горы
							</Text>
							<Text>
								Удивительное путешествие по лесам и горам оздоровит вас и запомниться на всю жизнь
							</Text>
							<Button>
								Присоединиться
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				ШАг 3 из 5
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
			>
				Стилизуйте текст и кнопку
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
			>
				Попрактикуемся в новых навыках стилизации и оформим кнопку и текст так как показано в примере
			</Text>
			<Box display="flex" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Оформите ваши заголовок и описание в соответствии с примером. На этот раз воспользуйтесь вкладкой Typography
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-1-1-dragdrop.svg" border-radius="4px" />
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								ПОДСКАЗКА: Можно скопировать стили из примера используя горячие клавиши: для Mac: cmd+alt+c и cmd+alt+v, для Windows: ctrl+alt+c и ctrl+alt+v.
							</Text>
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						quarkly-title="Item 2"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							2
						</Text>
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Теперь стилизуем{" "}
								<Span
									color="--primary"
									hyphens="manual"
									overflow-wrap="normal"
									text-indent="0"
									text-overflow="clip"
									white-space="normal"
									word-break="normal"
								>
									Button
								</Span>
								. Изменим свойства: Color, Background и Border radius. Color мы изменяли только что, а Background и Border на предыдущем шаге.{" "}
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-2-1-wh.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							3
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Добавим{" "}
							<Span
								color="--primary"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Button
							</Span>
							{" "}тень. Для этого откроем вкладку Effects и свойство Box shadow. Значение скопируйте из примера.
						</Text>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							4
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Наконец добавим{" "}
							<Span
								color="--primary"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Button
							</Span>
							{" "}отступы . Добавьте margin 25px в верхнее поле, а  padding 50px в боковые и 15px в верхнее и нижнее поля.
						</Text>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						РАБОЧАЯ ОБЛАСТЬ
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						margin="0px 0px 20px 0px"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						padding="30px 30px 30px 30px"
						min-height="320px"
						text-align="left"
					/>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						ПРИМЕР
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box width="100%" background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/cover" border-radius="12px" height="320px">
							<Icon category="md" icon={MdFace} />
							<Text font="--headline2" text-transform="uppercase" color="--light" text-align="center">
								Лес и горы
							</Text>
							<Text font="--lead" color="--lightD2" text-align="center">
								Удивительное путешествие по лесам и горам оздоровит вас и запомниться на всю жизнь
							</Text>
							<Button
								background="--color-secondary"
								color="--darkL2"
								padding="12px 34px 12px 34px"
								border-radius="24px"
								text-transform="uppercase"
								letter-spacing="1.2px"
								margin="24px 0px 0px 0px"
								box-shadow="0 12px 3px -4px rgba(3, 18, 7, 0.3)"
								opacity="1"
							>
								Присоединиться
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				ШАг 4 из 5
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
			>
				Поменяйте иконку и шрифт
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
			>
				Зададим заголовку выразительный шрифт и поменяем иконку на более подходящую
			</Text>
			<Box display="flex" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Выберите заголовок, в панели стилей перейдите во вкладку Typography и нажмите на иконку  . Вы разорвали связь со значением из «темы», теперь добавим в проект новый шрифт. Для этого кликните на значение чтобы открыть панель. На панели нажмите на кнопку Add google fonts.{" "}
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-1-1-dragdrop.svg" border-radius="4px" />
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								В{" "}
								<Strong
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									модальном окне
								</Strong>
								{" "}
								<Span
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									<Span
										font="300 24px/24px --fontFamily-sans"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										выберите
									</Span>
								</Span>
								{" "}Open{" "}
								<Em
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Sans
								</Em>
								{" "}Condenced и  на него. Закрывайте окно и выбирайте его для поля Family.
							</Text>
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Теперь стилизуем{" "}
								<Span
									color="--primary"
									hyphens="manual"
									overflow-wrap="normal"
									text-indent="0"
									text-overflow="clip"
									white-space="normal"
									word-break="normal"
								>
									Button
								</Span>
								. Изменим свойства: Color, Background и Border radius. Color мы изменяли только что, а Background и Border на предыдущем шаге.{" "}
							</Text>
							<Link
								href="ya.ru"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								кликните
							</Link>
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						quarkly-title="Item 2"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							2
						</Text>
						<Box width="100%">
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-2-1-wh.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							3
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Добавим{" "}
							<Span
								color="--primary"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Button
							</Span>
							{" "}тень. Для этого откроем вкладку Effects и свойство Box shadow. Значение скопируйте из примера.
						</Text>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							4
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Наконец добавим{" "}
							<Span
								color="--primary"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Button
							</Span>
							{" "}отступы . Добавьте margin 25px в верхнее поле, а  padding 50px в боковые и 15px в верхнее и нижнее поля.
						</Text>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						РАБОЧАЯ ОБЛАСТЬ
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						margin="0px 0px 20px 0px"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						padding="30px 30px 30px 30px"
						min-height="320px"
						text-align="left"
					/>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						ПРИМЕР
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box width="100%" background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/cover" border-radius="12px" height="320px">
							<Icon category="fa" icon={FaTree} font="64px sans-serif" color="--light" />
							<Text font="normal 500 42px/1.2 --fontFamily-googleOpenSansCondensed" text-transform="uppercase" color="--light" text-align="center">
								Лес и горы
							</Text>
							<Text font="--lead" color="--lightD2" text-align="center">
								Удивительное путешествие по лесам и горам оздоровит вас и запомниться на всю жизнь
							</Text>
							<Button
								background="--color-secondary"
								color="--darkL2"
								padding="12px 34px 12px 34px"
								border-radius="24px"
								text-transform="uppercase"
								letter-spacing="1.2px"
								margin="24px 0px 0px 0px"
								box-shadow="0 12px 3px -4px rgba(3, 18, 7, 0.3)"
								opacity="1"
							>
								Присоединиться
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				ШАг 5 из 5
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
			>
				Центрируйте элементы{" "}
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
			>
				По умолчанию элементы выравниваются по верхнему левому краю.  Сделаем их по центру{" "}
				<Span
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					color="--primary"
				>
					Box
				</Span>
				{" "}c помощью display flex
			</Text>
			<Box display="flex" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Выберите{" "}
								<Span
									color="--primary"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Box
								</Span>
								{" "}на странице и откройте вкладку Layouts на панели Styles. Укажите свойству display значение flex. Это значит, что Box будет использовать flexbox —более удобный способ для выравнивания элементов.
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-1-1-dragdrop.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						quarkly-title="Item 2"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							2
						</Text>
						<Box width="100%">
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-2-1-wh.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							3
						</Text>
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Выберите значение center для свойств Align items и Justify content.
							</Text>
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								ПОДСКАЗКА: Поиграйтесь с различными значениями, чтобы понять как это работает.
							</Text>
						</Box>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						РАБОЧАЯ ОБЛАСТЬ
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						margin="0px 0px 20px 0px"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						padding="30px 30px 30px 30px"
						min-height="320px"
						text-align="left"
					>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
					</Box>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						ПРИМЕР
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box
							width="100%"
							background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/cover"
							border-radius="12px"
							height="320px"
							display="flex"
							flex-direction="column"
							align-items="center"
							justify-content="center"
							padding="48px 36px 72px 36px"
							opacity="1"
						>
							<Icon category="fa" icon={FaTree} font="64px sans-serif" color="--light" />
							<Text font="normal 500 48px/1.2 --fontFamily-googleOpenSansCondensed" text-transform="uppercase" color="--light" text-align="center">
								Лес и горы
							</Text>
							<Text font="--lead" color="--lightD2" text-align="center">
								Удивительное путешествие по лесам и горам оздоровит вас и запомниться на всю жизнь
							</Text>
							<Button
								background="--color-secondary"
								color="--darkL2"
								padding="12px 34px 12px 34px"
								border-radius="24px"
								text-transform="uppercase"
								letter-spacing="1.2px"
								margin="24px 0px 0px 0px"
								opacity="1"
								box-shadow="0 12px 3px -4px rgba(3, 18, 7, 0.3)"
							>
								Присоединиться
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				СУПЕРИГРА!
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
			>
				Отличная работа!
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
			>
				Вы создали первую карточку и изучили фундаментальные принципы веб-дизайна. Настало время проверить свои силы!
			</Text>
			<Box display="flex" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 8px 0px"
								width="100%"
								color="--darkL2"
							>
								Мы подготовили другую карточку для вас чтобы вы создали самостоятельно. Если вы что-то забыли, прокрутите наверх и всё вспомнится! Хорошего дизайна!
							</Text>
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								ПОДСКАЗКА: Выбирайте элементы в примере и смотрите их стили.
							</Text>
						</Box>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						РАБОЧАЯ ОБЛАСТЬ
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						margin="0px 0px 20px 0px"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						padding="30px 30px 30px 30px"
						min-height="320px"
						text-align="left"
					/>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						ПРИМЕР
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box
							width="100%"
							background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/cover"
							border-radius="8px"
							height="320px"
							display="flex"
							flex-direction="column"
							align-items="center"
							justify-content="center"
							padding="48px 36px 72px 36px"
							opacity="1"
						>
							<Icon category="fa" icon={FaTree} font="64px sans-serif" color="--light" />
							<Text
								font="normal 500 48px/1.2 --fontFamily-googleOpenSansCondensed"
								text-transform="uppercase"
								color="--light"
								text-align="center"
								margin="16px 0px 0px 0px"
							>
								Лес и горы
							</Text>
							<Text font="--lead" color="--lightD2" text-align="center">
								Удивительное путешествие по лесам и горам оздоровит вас и запомниться на всю жизнь
							</Text>
							<Button
								background="--color-secondary"
								color="--darkL2"
								padding="12px 34px 12px 34px"
								border-radius="24px"
								text-transform="uppercase"
								letter-spacing="1.2px"
								margin="24px 0px 0px 0px"
								opacity="1"
								box-shadow="0 12px 3px -4px rgba(3, 18, 7, 0.3)"
							>
								Присоединиться
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				Идем дальше
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
			>
				Переходите на следующий шаг
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 0px 0"
				width="50%"
				color="--darkL2"
			>
				Вы отлично справились с первым шагом к знакомству с Quarkly. На следующем шаге вы углубите свои знания и приобретете навыки:
			</Text>
			<List margin="0px 0px 16px 0px">
				<Text font="--base">
					На что влияют другие свойства элементов;
				</Text>
				<Text font="--base">
					Как стилизовать состояния: hover, focused и другие;
				</Text>
				<Text font="--base">
					Как делать адаптивный дизайн;
				</Text>
				<Text font="--base">
					Как подключать шрифты из Google Fonts.
				</Text>
			</List>
			<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-1-1-dragdrop.svg" border-radius="4px" max-width="540px" />
		</Section>
		<Section
			padding="130px 0px 100px 0px"
			sm-padding="40px 0"
			background="--color-darkL2"
			border-width="0px 0px 3px 0px"
			border-style="solid"
			border-color="--color-primary"
		>
			<Override slot="SectionContent" align-items="flex-start" flex-direction="column" />
			<Text
				as="h2"
				font="--headline1"
				md-font="--headline2"
				margin="20px 0 0 0"
				width="33.33%"
				color="--light"
			>
				Введение в Quarkly
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="20px 0 0 0"
				width="66.66%"
				color="--lightD2"
			>
				Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake. I’m a great space for you to tell a story and let your site visitors know more about you. Talk about your business and what products and services you offer. Share how you came up with the idea for your company and what makes you different from your competitors. Make your business stand out and show your visitors who you are.
			</Text>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				ШАг 1 из 5
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
			>
				Добавьте элементы
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
			>
				Чтобы начать, откройте панель слоев, переключитесь на вкладку Components, затем перетащите элементы на рабочую область.
			</Text>
			<Box display="flex" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Откройте панель слоев, переключитесь на вкладку Components, выберите{" "}
								<Image
									width="24px"
									height="24px"
									vertical-align="top"
									src="https://artemzhigalin.ru/src/onboarding-tutorial-box.svg"
									margin="0px 2px 0px 2px"
								/>
								<Span
									color="--primary"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Box
								</Span>
								{" "}схватите его и бросьте в Рабочую область.
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-1-1-dragdrop.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						quarkly-title="Item 2"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							2
						</Text>
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 8px 0px"
								width="100%"
								color="--darkL2"
							>
								Затем бросьте внутрь{" "}
								<Image
									width="24px"
									height="24px"
									vertical-align="top"
									src="https://artemzhigalin.ru/src/onboarding-tutorial-box.svg"
									margin="0px 2px 0px 2px"
								/>
								<Span
									color="--primary"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Box
								</Span>
								{" "}следующие элементы сохраняя порядок:
							</Text>
							<List width="100%" box-sizing="border-box" list-style-type="none" padding="0px 0px 0px 0px">
								<Box display="flex" align-items="center" margin="0px 0px 4px 0px">
									<Icon category="bs" icon={BsDot} />
									<Image
										width="24px"
										height="24px"
										vertical-align="top"
										src="https://artemzhigalin.ru/src/onboarding-tutorial-icon.svg"
										margin="0px 4px 0px 2px"
									/>
									<Text
										display="block"
										font="--base"
										color="--primary"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										margin="0px 0px 0px 0px"
									>
										Icon
									</Text>
								</Box>
								<Box display="flex" align-items="center" margin="0px 0px 4px 0px">
									<Icon category="bs" icon={BsDot} />
									<Image
										width="24px"
										height="24px"
										vertical-align="top"
										src="https://artemzhigalin.ru/src/onboarding-tutorial-text.svg"
										margin="0px 4px 0px 2px"
									/>
									<Text
										display="block"
										font="--base"
										color="--primary"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										margin="0px 0px 0px 0px"
									>
										Text
									</Text>
								</Box>
								<Box display="flex" align-items="center" margin="0px 0px 4px 0px">
									<Icon category="bs" icon={BsDot} />
									<Image
										width="24px"
										height="24px"
										vertical-align="top"
										src="https://artemzhigalin.ru/src/onboarding-tutorial-text.svg"
										margin="0px 4px 0px 2px"
									/>
									<Text
										display="block"
										font="--base"
										color="--primary"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										margin="0px 0px 0px 0px"
									>
										Text
									</Text>
								</Box>
								<Box display="flex" align-items="center" margin="0px 0px 4px 0px">
									<Icon category="bs" icon={BsDot} />
									<Image
										width="24px"
										height="24px"
										vertical-align="top"
										src="https://artemzhigalin.ru/src/onboarding-tutorial-button.svg"
										margin="0px 4px 0px 2px"
									/>
									<Text
										display="block"
										font="--base"
										color="--primary"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										margin="0px 0px 0px 0px"
									>
										Button
									</Text>
								</Box>
							</List>
							<Text
								display="block"
								font="--base"
								margin="20px 0px 8px 0px"
								width="100%"
								color="--darkL2"
							>
								Первый элемент
								<Image
									width="24px"
									height="24px"
									vertical-align="top"
									src="https://artemzhigalin.ru/src/onboarding-tutorial-text.svg"
									margin="0px 2px 0px 2px"
								/>
								<Span
									color="--primary"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Text
								</Span>
								{"  "}будет заголовком, а второй описанием карточки.
							</Text>
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							3
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Кликните два раза на элементы, и измените текст как в примере.
						</Text>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						РАБОЧАЯ ОБЛАСТЬ
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						margin="0px 0px 20px 0px"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						padding="30px 30px 30px 30px"
						min-height="320px"
						text-align="left"
					/>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						ПРИМЕР
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box width="100%">
							<Icon category="md" icon={MdFace} size="64зч" />
							<Text>
								Лес и горы
							</Text>
							<Text>
								Удивительное путешествие по лесам и горам оздоровит вас и запомниться на всю жизнь
							</Text>
							<Button>
								Присоединиться
							</Button>
							<Hr />
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				ШАг 2 из 5
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
				letter-spacing="1px"
			>
				Стилизуйте фон
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
			>
				Теперь когда мы создали структуру карточки, давайте немного украсим её: добавим фон, скруглим углы
				<br />
				<br />
			</Text>
			<Box display="flex" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Выберите{" "}
								<Image
									width="24px"
									height="24px"
									vertical-align="top"
									src="https://artemzhigalin.ru/src/onboarding-tutorial-box.svg"
									margin="0px 2px 0px 2px"
								/>
								<Span
									color="--primary"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Box
								</Span>
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-1-1-dragdrop.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						quarkly-title="Item 2"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							2
						</Text>
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Перейдите в панель Styles в раздел Layout и задайте свойству Width 100%, а Height 320px
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-2-1-wh.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							3
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Теперь сохраняя выделение Box перейдите в раздел Backgrounds, кликните в поле ввода, чтобы открыть панель, выберите Type URL и введите адрес изображения:{" "}
						</Text>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							4
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Кликните два раза на элементы, и измените текст как в примере.
						</Text>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						РАБОЧАЯ ОБЛАСТЬ
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						margin="0px 0px 20px 0px"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						padding="30px 30px 30px 30px"
						min-height="320px"
						text-align="left"
					/>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						ПРИМЕР
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box width="100%" background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/cover" border-radius="12px" height="320px">
							<Icon category="md" icon={MdFace} />
							<Text>
								Лес и горы
							</Text>
							<Text>
								Удивительное путешествие по лесам и горам оздоровит вас и запомниться на всю жизнь
							</Text>
							<Button>
								Присоединиться
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				ШАг 3 из 5
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
			>
				Стилизуйте текст и кнопку
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
			>
				Попрактикуемся в новых навыках стилизации и оформим кнопку и текст так как показано в примере
			</Text>
			<Box display="flex" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Оформите ваши заголовок и описание в соответствии с примером. На этот раз воспользуйтесь вкладкой Typography
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-1-1-dragdrop.svg" border-radius="4px" />
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								ПОДСКАЗКА: Можно скопировать стили из примера используя горячие клавиши: для Mac: cmd+alt+c и cmd+alt+v, для Windows: ctrl+alt+c и ctrl+alt+v.
							</Text>
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						quarkly-title="Item 2"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							2
						</Text>
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Теперь стилизуем{" "}
								<Span
									color="--primary"
									hyphens="manual"
									overflow-wrap="normal"
									text-indent="0"
									text-overflow="clip"
									white-space="normal"
									word-break="normal"
								>
									Button
								</Span>
								. Изменим свойства: Color, Background и Border radius. Color мы изменяли только что, а Background и Border на предыдущем шаге.{" "}
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-2-1-wh.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							3
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Добавим{" "}
							<Span
								color="--primary"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Button
							</Span>
							{" "}тень. Для этого откроем вкладку Effects и свойство Box shadow. Значение скопируйте из примера.
						</Text>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							4
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Наконец добавим{" "}
							<Span
								color="--primary"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Button
							</Span>
							{" "}отступы . Добавьте margin 25px в верхнее поле, а  padding 50px в боковые и 15px в верхнее и нижнее поля.
						</Text>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						РАБОЧАЯ ОБЛАСТЬ
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						margin="0px 0px 20px 0px"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						padding="30px 30px 30px 30px"
						min-height="320px"
						text-align="left"
					/>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						ПРИМЕР
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box width="100%" background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/cover" border-radius="12px" height="320px">
							<Icon category="md" icon={MdFace} />
							<Text font="--headline2" text-transform="uppercase" color="--light" text-align="center">
								Лес и горы
							</Text>
							<Text font="--lead" color="--lightD2" text-align="center">
								Удивительное путешествие по лесам и горам оздоровит вас и запомниться на всю жизнь
							</Text>
							<Button
								background="--color-secondary"
								color="--darkL2"
								padding="12px 34px 12px 34px"
								border-radius="24px"
								text-transform="uppercase"
								letter-spacing="1.2px"
								margin="24px 0px 0px 0px"
								box-shadow="0 12px 3px -4px rgba(3, 18, 7, 0.3)"
								opacity="1"
							>
								Присоединиться
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				ШАг 4 из 5
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
			>
				Поменяйте иконку и шрифт
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
			>
				Зададим заголовку выразительный шрифт и поменяем иконку на более подходящую
			</Text>
			<Box display="flex" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Выберите заголовок, в панели стилей перейдите во вкладку Typography и нажмите на иконку  . Вы разорвали связь со значением из «темы», теперь добавим в проект новый шрифт. Для этого кликните на значение чтобы открыть панель. На панели нажмите на кнопку Add google fonts.{" "}
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-1-1-dragdrop.svg" border-radius="4px" />
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								В{" "}
								<Strong
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									модальном окне
								</Strong>
								{" "}
								<Span
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									<Span
										font="300 24px/24px --fontFamily-sans"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										выберите
									</Span>
								</Span>
								{" "}Open{" "}
								<Em
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Sans
								</Em>
								{" "}Condenced и  на него. Закрывайте окно и выбирайте его для поля Family.
							</Text>
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Теперь стилизуем{" "}
								<Span
									color="--primary"
									hyphens="manual"
									overflow-wrap="normal"
									text-indent="0"
									text-overflow="clip"
									white-space="normal"
									word-break="normal"
								>
									Button
								</Span>
								. Изменим свойства: Color, Background и Border radius. Color мы изменяли только что, а Background и Border на предыдущем шаге.{" "}
							</Text>
							<Link
								href="ya.ru"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								кликните
							</Link>
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						quarkly-title="Item 2"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							2
						</Text>
						<Box width="100%">
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-2-1-wh.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							3
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Добавим{" "}
							<Span
								color="--primary"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Button
							</Span>
							{" "}тень. Для этого откроем вкладку Effects и свойство Box shadow. Значение скопируйте из примера.
						</Text>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							4
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Наконец добавим{" "}
							<Span
								color="--primary"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Button
							</Span>
							{" "}отступы . Добавьте margin 25px в верхнее поле, а  padding 50px в боковые и 15px в верхнее и нижнее поля.
						</Text>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						РАБОЧАЯ ОБЛАСТЬ
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						margin="0px 0px 20px 0px"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						padding="30px 30px 30px 30px"
						min-height="320px"
						text-align="left"
					/>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						ПРИМЕР
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box width="100%" background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/cover" border-radius="12px" height="320px">
							<Icon category="fa" icon={FaTree} font="64px sans-serif" color="--light" />
							<Text font="normal 500 42px/1.2 --fontFamily-googleOpenSansCondensed" text-transform="uppercase" color="--light" text-align="center">
								Лес и горы
							</Text>
							<Text font="--lead" color="--lightD2" text-align="center">
								Удивительное путешествие по лесам и горам оздоровит вас и запомниться на всю жизнь
							</Text>
							<Button
								background="--color-secondary"
								color="--darkL2"
								padding="12px 34px 12px 34px"
								border-radius="24px"
								text-transform="uppercase"
								letter-spacing="1.2px"
								margin="24px 0px 0px 0px"
								box-shadow="0 12px 3px -4px rgba(3, 18, 7, 0.3)"
								opacity="1"
							>
								Присоединиться
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				ШАг 5 из 5
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
			>
				Центрируйте элементы{" "}
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
			>
				По умолчанию элементы выравниваются по верхнему левому краю.  Сделаем их по центру{" "}
				<Span
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					color="--primary"
				>
					Box
				</Span>
				{" "}c помощью display flex
			</Text>
			<Box display="flex" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Выберите{" "}
								<Span
									color="--primary"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Box
								</Span>
								{" "}на странице и откройте вкладку Layouts на панели Styles. Укажите свойству display значение flex. Это значит, что Box будет использовать flexbox —более удобный способ для выравнивания элементов.
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-1-1-dragdrop.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						quarkly-title="Item 2"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							2
						</Text>
						<Box width="100%">
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-2-1-wh.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							3
						</Text>
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Выберите значение center для свойств Align items и Justify content.
							</Text>
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								ПОДСКАЗКА: Поиграйтесь с различными значениями, чтобы понять как это работает.
							</Text>
						</Box>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						РАБОЧАЯ ОБЛАСТЬ
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						margin="0px 0px 20px 0px"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						padding="30px 30px 30px 30px"
						min-height="320px"
						text-align="left"
					>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
					</Box>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						ПРИМЕР
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box
							width="100%"
							background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/cover"
							border-radius="12px"
							height="320px"
							display="flex"
							flex-direction="column"
							align-items="center"
							justify-content="center"
							padding="48px 36px 72px 36px"
							opacity="1"
						>
							<Icon category="fa" icon={FaTree} font="64px sans-serif" color="--light" />
							<Text font="normal 500 48px/1.2 --fontFamily-googleOpenSansCondensed" text-transform="uppercase" color="--light" text-align="center">
								Лес и горы
							</Text>
							<Text font="--lead" color="--lightD2" text-align="center">
								Удивительное путешествие по лесам и горам оздоровит вас и запомниться на всю жизнь
							</Text>
							<Button
								background="--color-secondary"
								color="--darkL2"
								padding="12px 34px 12px 34px"
								border-radius="24px"
								text-transform="uppercase"
								letter-spacing="1.2px"
								margin="24px 0px 0px 0px"
								opacity="1"
								box-shadow="0 12px 3px -4px rgba(3, 18, 7, 0.3)"
							>
								Присоединиться
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				СУПЕРИГРА!
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
			>
				Отличная работа!
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
			>
				Вы создали первую карточку и изучили фундаментальные принципы веб-дизайна. Настало время проверить свои силы!
			</Text>
			<Box display="flex" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 8px 0px"
								width="100%"
								color="--darkL2"
							>
								Мы подготовили другую карточку для вас чтобы вы создали самостоятельно. Если вы что-то забыли, прокрутите наверх и всё вспомнится! Хорошего дизайна!
							</Text>
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								ПОДСКАЗКА: Выбирайте элементы в примере и смотрите их стили.
							</Text>
						</Box>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						РАБОЧАЯ ОБЛАСТЬ
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						margin="0px 0px 20px 0px"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						padding="30px 30px 30px 30px"
						min-height="320px"
						text-align="left"
					/>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						ПРИМЕР
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box
							width="100%"
							background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/cover"
							border-radius="8px"
							height="320px"
							display="flex"
							flex-direction="column"
							align-items="center"
							justify-content="center"
							padding="48px 36px 72px 36px"
							opacity="1"
						>
							<Icon category="fa" icon={FaTree} font="64px sans-serif" color="--light" />
							<Text
								font="normal 500 48px/1.2 --fontFamily-googleOpenSansCondensed"
								text-transform="uppercase"
								color="--light"
								text-align="center"
								margin="16px 0px 0px 0px"
							>
								Лес и горы
							</Text>
							<Text font="--lead" color="--lightD2" text-align="center">
								Удивительное путешествие по лесам и горам оздоровит вас и запомниться на всю жизнь
							</Text>
							<Button
								background="--color-secondary"
								color="--darkL2"
								padding="12px 34px 12px 34px"
								border-radius="24px"
								text-transform="uppercase"
								letter-spacing="1.2px"
								margin="24px 0px 0px 0px"
								opacity="1"
								box-shadow="0 12px 3px -4px rgba(3, 18, 7, 0.3)"
							>
								Присоединиться
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				Идем дальше
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
			>
				Переходите на следующий шаг
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 0px 0"
				width="50%"
				color="--darkL2"
			>
				Вы отлично справились с первым шагом к знакомству с Quarkly. На следующем шаге вы углубите свои знания и приобретете навыки:
			</Text>
			<List margin="0px 0px 16px 0px">
				<Text font="--base">
					На что влияют другие свойства элементов;
				</Text>
				<Text font="--base">
					Как стилизовать состояния: hover, focused и другие;
				</Text>
				<Text font="--base">
					Как делать адаптивный дизайн;
				</Text>
				<Text font="--base">
					Как подключать шрифты из Google Fonts.
				</Text>
			</List>
			<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-1-1-dragdrop.svg" border-radius="4px" max-width="540px" />
		</Section>
		<Section
			padding="130px 0px 100px 0px"
			sm-padding="40px 0"
			background="--color-darkL2"
			border-width="0px 0px 3px 0px"
			border-style="solid"
			border-color="--color-primary"
		>
			<Override slot="SectionContent" align-items="flex-start" flex-direction="column" />
			<Text
				as="h2"
				font="--headline1"
				md-font="--headline2"
				margin="20px 0 0 0"
				width="33.33%"
				color="--light"
			>
				Введение в Quarkly
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="20px 0 0 0"
				width="66.66%"
				color="--lightD2"
			>
				Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake. I’m a great space for you to tell a story and let your site visitors know more about you. Talk about your business and what products and services you offer. Share how you came up with the idea for your company and what makes you different from your competitors. Make your business stand out and show your visitors who you are.
			</Text>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				ШАг 1 из 5
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
			>
				Добавьте элементы
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
			>
				Чтобы начать, откройте панель слоев, переключитесь на вкладку Components, затем перетащите элементы на рабочую область.
			</Text>
			<Box display="flex" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Откройте панель слоев, переключитесь на вкладку Components, выберите{" "}
								<Image
									width="24px"
									height="24px"
									vertical-align="top"
									src="https://artemzhigalin.ru/src/onboarding-tutorial-box.svg"
									margin="0px 2px 0px 2px"
								/>
								<Span
									color="--primary"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Box
								</Span>
								{" "}схватите его и бросьте в Рабочую область.
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-1-1-dragdrop.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						quarkly-title="Item 2"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							2
						</Text>
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 8px 0px"
								width="100%"
								color="--darkL2"
							>
								Затем бросьте внутрь{" "}
								<Image
									width="24px"
									height="24px"
									vertical-align="top"
									src="https://artemzhigalin.ru/src/onboarding-tutorial-box.svg"
									margin="0px 2px 0px 2px"
								/>
								<Span
									color="--primary"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Box
								</Span>
								{" "}следующие элементы сохраняя порядок:
							</Text>
							<List width="100%" box-sizing="border-box" list-style-type="none" padding="0px 0px 0px 0px">
								<Box display="flex" align-items="center" margin="0px 0px 4px 0px">
									<Icon category="bs" icon={BsDot} />
									<Image
										width="24px"
										height="24px"
										vertical-align="top"
										src="https://artemzhigalin.ru/src/onboarding-tutorial-icon.svg"
										margin="0px 4px 0px 2px"
									/>
									<Text
										display="block"
										font="--base"
										color="--primary"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										margin="0px 0px 0px 0px"
									>
										Icon
									</Text>
								</Box>
								<Box display="flex" align-items="center" margin="0px 0px 4px 0px">
									<Icon category="bs" icon={BsDot} />
									<Image
										width="24px"
										height="24px"
										vertical-align="top"
										src="https://artemzhigalin.ru/src/onboarding-tutorial-text.svg"
										margin="0px 4px 0px 2px"
									/>
									<Text
										display="block"
										font="--base"
										color="--primary"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										margin="0px 0px 0px 0px"
									>
										Text
									</Text>
								</Box>
								<Box display="flex" align-items="center" margin="0px 0px 4px 0px">
									<Icon category="bs" icon={BsDot} />
									<Image
										width="24px"
										height="24px"
										vertical-align="top"
										src="https://artemzhigalin.ru/src/onboarding-tutorial-text.svg"
										margin="0px 4px 0px 2px"
									/>
									<Text
										display="block"
										font="--base"
										color="--primary"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										margin="0px 0px 0px 0px"
									>
										Text
									</Text>
								</Box>
								<Box display="flex" align-items="center" margin="0px 0px 4px 0px">
									<Icon category="bs" icon={BsDot} />
									<Image
										width="24px"
										height="24px"
										vertical-align="top"
										src="https://artemzhigalin.ru/src/onboarding-tutorial-button.svg"
										margin="0px 4px 0px 2px"
									/>
									<Text
										display="block"
										font="--base"
										color="--primary"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										margin="0px 0px 0px 0px"
									>
										Button
									</Text>
								</Box>
							</List>
							<Text
								display="block"
								font="--base"
								margin="20px 0px 8px 0px"
								width="100%"
								color="--darkL2"
							>
								Первый элемент
								<Image
									width="24px"
									height="24px"
									vertical-align="top"
									src="https://artemzhigalin.ru/src/onboarding-tutorial-text.svg"
									margin="0px 2px 0px 2px"
								/>
								<Span
									color="--primary"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Text
								</Span>
								{"  "}будет заголовком, а второй описанием карточки.
							</Text>
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							3
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Кликните два раза на элементы, и измените текст как в примере.
						</Text>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						РАБОЧАЯ ОБЛАСТЬ
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						margin="0px 0px 20px 0px"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						padding="30px 30px 30px 30px"
						min-height="320px"
						text-align="left"
					/>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						ПРИМЕР
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box width="100%">
							<Icon category="md" icon={MdFace} size="64зч" />
							<Text>
								Лес и горы
							</Text>
							<Text>
								Удивительное путешествие по лесам и горам оздоровит вас и запомниться на всю жизнь
							</Text>
							<Button>
								Присоединиться
							</Button>
							<Hr />
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				ШАг 2 из 5
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
				letter-spacing="1px"
			>
				Стилизуйте фон
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
			>
				Теперь когда мы создали структуру карточки, давайте немного украсим её: добавим фон, скруглим углы
			</Text>
			<Box display="flex" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Выберите{" "}
								<Image
									width="24px"
									height="24px"
									vertical-align="top"
									src="https://artemzhigalin.ru/src/onboarding-tutorial-box.svg"
									margin="0px 2px 0px 2px"
								/>
								<Span
									color="--primary"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Box
								</Span>
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-1-1-dragdrop.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						quarkly-title="Item 2"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							2
						</Text>
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Перейдите в панель Styles в раздел Layout и задайте свойству Width 100%, а Height 320px
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-2-1-wh.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							3
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Теперь сохраняя выделение Box перейдите в раздел Backgrounds, кликните в поле ввода, чтобы открыть панель, выберите Type URL и введите адрес изображения:{" "}
						</Text>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							4
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Кликните два раза на элементы, и измените текст как в примере.
						</Text>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						РАБОЧАЯ ОБЛАСТЬ
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						margin="0px 0px 20px 0px"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						padding="30px 30px 30px 30px"
						min-height="320px"
						text-align="left"
					/>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						ПРИМЕР
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box width="100%" background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/cover" border-radius="12px" height="320px">
							<Icon category="md" icon={MdFace} />
							<Text>
								Лес и горы
							</Text>
							<Text>
								Удивительное путешествие по лесам и горам оздоровит вас и запомниться на всю жизнь
							</Text>
							<Button>
								Присоединиться
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				ШАг 3 из 5
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
			>
				Стилизуйте текст и кнопку
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
			>
				Попрактикуемся в новых навыках стилизации и оформим кнопку и текст так как показано в примере
			</Text>
			<Box display="flex" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Оформите ваши заголовок и описание в соответствии с примером. На этот раз воспользуйтесь вкладкой Typography
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-1-1-dragdrop.svg" border-radius="4px" />
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								ПОДСКАЗКА: Можно скопировать стили из примера используя горячие клавиши: для Mac: cmd+alt+c и cmd+alt+v, для Windows: ctrl+alt+c и ctrl+alt+v.
							</Text>
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						quarkly-title="Item 2"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							2
						</Text>
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Теперь стилизуем{" "}
								<Span
									color="--primary"
									hyphens="manual"
									overflow-wrap="normal"
									text-indent="0"
									text-overflow="clip"
									white-space="normal"
									word-break="normal"
								>
									Button
								</Span>
								. Изменим свойства: Color, Background и Border radius. Color мы изменяли только что, а Background и Border на предыдущем шаге.{" "}
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-2-1-wh.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							3
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Добавим{" "}
							<Span
								color="--primary"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Button
							</Span>
							{" "}тень. Для этого откроем вкладку Effects и свойство Box shadow. Значение скопируйте из примера.
						</Text>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							4
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Наконец добавим{" "}
							<Span
								color="--primary"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Button
							</Span>
							{" "}отступы . Добавьте margin 25px в верхнее поле, а  padding 50px в боковые и 15px в верхнее и нижнее поля.
						</Text>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						РАБОЧАЯ ОБЛАСТЬ
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						margin="0px 0px 20px 0px"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						padding="30px 30px 30px 30px"
						min-height="320px"
						text-align="left"
					/>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						ПРИМЕР
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box width="100%" background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/cover" border-radius="12px" height="320px">
							<Icon category="md" icon={MdFace} />
							<Text font="--headline2" text-transform="uppercase" color="--light" text-align="center">
								Лес и горы
							</Text>
							<Text font="--lead" color="--lightD2" text-align="center">
								Удивительное путешествие по лесам и горам оздоровит вас и запомниться на всю жизнь
							</Text>
							<Button
								background="--color-secondary"
								color="--darkL2"
								padding="12px 34px 12px 34px"
								border-radius="24px"
								text-transform="uppercase"
								letter-spacing="1.2px"
								margin="24px 0px 0px 0px"
								box-shadow="0 12px 3px -4px rgba(3, 18, 7, 0.3)"
								opacity="1"
							>
								Присоединиться
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				ШАг 4 из 5
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
			>
				Поменяйте иконку и шрифт
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
			>
				Зададим заголовку выразительный шрифт и поменяем иконку на более подходящую
			</Text>
			<Box display="flex" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Выберите заголовок, в панели стилей перейдите во вкладку Typography и нажмите на иконку  . Вы разорвали связь со значением из «темы», теперь добавим в проект новый шрифт. Для этого кликните на значение чтобы открыть панель. На панели нажмите на кнопку Add google fonts.{" "}
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-1-1-dragdrop.svg" border-radius="4px" />
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								В{" "}
								<Strong
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									модальном окне
								</Strong>
								{" "}
								<Span
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									<Span
										font="300 24px/24px --fontFamily-sans"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										выберите
									</Span>
								</Span>
								{" "}Open{" "}
								<Em
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Sans
								</Em>
								{" "}Condenced и  на него. Закрывайте окно и выбирайте его для поля Family.
							</Text>
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Теперь стилизуем{" "}
								<Span
									color="--primary"
									hyphens="manual"
									overflow-wrap="normal"
									text-indent="0"
									text-overflow="clip"
									white-space="normal"
									word-break="normal"
								>
									Button
								</Span>
								. Изменим свойства: Color, Background и Border radius. Color мы изменяли только что, а Background и Border на предыдущем шаге.{" "}
							</Text>
							<Link
								href="ya.ru"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								кликните
							</Link>
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						quarkly-title="Item 2"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							2
						</Text>
						<Box width="100%">
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-2-1-wh.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							3
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Добавим{" "}
							<Span
								color="--primary"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Button
							</Span>
							{" "}тень. Для этого откроем вкладку Effects и свойство Box shadow. Значение скопируйте из примера.
						</Text>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							4
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Наконец добавим{" "}
							<Span
								color="--primary"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Button
							</Span>
							{" "}отступы . Добавьте margin 25px в верхнее поле, а  padding 50px в боковые и 15px в верхнее и нижнее поля.
						</Text>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						РАБОЧАЯ ОБЛАСТЬ
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						margin="0px 0px 20px 0px"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						padding="30px 30px 30px 30px"
						min-height="320px"
						text-align="left"
					/>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						ПРИМЕР
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box width="100%" background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/cover" border-radius="12px" height="320px">
							<Icon category="fa" icon={FaTree} font="64px sans-serif" color="--light" />
							<Text font="normal 500 42px/1.2 --fontFamily-googleOpenSansCondensed" text-transform="uppercase" color="--light" text-align="center">
								Лес и горы
							</Text>
							<Text font="--lead" color="--lightD2" text-align="center">
								Удивительное путешествие по лесам и горам оздоровит вас и запомниться на всю жизнь
							</Text>
							<Button
								background="--color-secondary"
								color="--darkL2"
								padding="12px 34px 12px 34px"
								border-radius="24px"
								text-transform="uppercase"
								letter-spacing="1.2px"
								margin="24px 0px 0px 0px"
								box-shadow="0 12px 3px -4px rgba(3, 18, 7, 0.3)"
								opacity="1"
							>
								Присоединиться
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				ШАг 5 из 5
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
			>
				Центрируйте элементы{" "}
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
			>
				По умолчанию элементы выравниваются по верхнему левому краю.  Сделаем их по центру{" "}
				<Span
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					color="--primary"
				>
					Box
				</Span>
				{" "}c помощью display flex
			</Text>
			<Box display="flex" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Выберите{" "}
								<Span
									color="--primary"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Box
								</Span>
								{" "}на странице и откройте вкладку Layouts на панели Styles. Укажите свойству display значение flex. Это значит, что Box будет использовать flexbox —более удобный способ для выравнивания элементов.
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-1-1-dragdrop.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						quarkly-title="Item 2"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							2
						</Text>
						<Box width="100%">
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-2-1-wh.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							3
						</Text>
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Выберите значение center для свойств Align items и Justify content.
							</Text>
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								ПОДСКАЗКА: Поиграйтесь с различными значениями, чтобы понять как это работает.
							</Text>
						</Box>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						РАБОЧАЯ ОБЛАСТЬ
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						margin="0px 0px 20px 0px"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						padding="30px 30px 30px 30px"
						min-height="320px"
						text-align="left"
					>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
					</Box>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						ПРИМЕР
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box
							width="100%"
							background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/cover"
							border-radius="12px"
							height="320px"
							display="flex"
							flex-direction="column"
							align-items="center"
							justify-content="center"
							padding="48px 36px 72px 36px"
							opacity="1"
						>
							<Icon category="fa" icon={FaTree} font="64px sans-serif" color="--light" />
							<Text font="normal 500 48px/1.2 --fontFamily-googleOpenSansCondensed" text-transform="uppercase" color="--light" text-align="center">
								Лес и горы
							</Text>
							<Text font="--lead" color="--lightD2" text-align="center">
								Удивительное путешествие по лесам и горам оздоровит вас и запомниться на всю жизнь
							</Text>
							<Button
								background="--color-secondary"
								color="--darkL2"
								padding="12px 34px 12px 34px"
								border-radius="24px"
								text-transform="uppercase"
								letter-spacing="1.2px"
								margin="24px 0px 0px 0px"
								opacity="1"
								box-shadow="0 12px 3px -4px rgba(3, 18, 7, 0.3)"
							>
								Присоединиться
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				СУПЕРИГРА!
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
			>
				Отличная работа!
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
			>
				Вы создали первую карточку и изучили фундаментальные принципы веб-дизайна. Настало время проверить свои силы!
			</Text>
			<Box display="flex" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 8px 0px"
								width="100%"
								color="--darkL2"
							>
								Мы подготовили другую карточку для вас чтобы вы создали самостоятельно. Если вы что-то забыли, прокрутите наверх и всё вспомнится! Хорошего дизайна!
							</Text>
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								ПОДСКАЗКА: Выбирайте элементы в примере и смотрите их стили.
							</Text>
						</Box>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						РАБОЧАЯ ОБЛАСТЬ
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						margin="0px 0px 20px 0px"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						padding="30px 30px 30px 30px"
						min-height="320px"
						text-align="left"
					/>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						ПРИМЕР
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box
							width="100%"
							background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/cover"
							border-radius="8px"
							height="320px"
							display="flex"
							flex-direction="column"
							align-items="center"
							justify-content="center"
							padding="48px 36px 72px 36px"
							opacity="1"
						>
							<Icon category="fa" icon={FaTree} font="64px sans-serif" color="--light" />
							<Text
								font="normal 500 48px/1.2 --fontFamily-googleOpenSansCondensed"
								text-transform="uppercase"
								color="--light"
								text-align="center"
								margin="16px 0px 0px 0px"
							>
								Лес и горы
							</Text>
							<Text font="--lead" color="--lightD2" text-align="center">
								Удивительное путешествие по лесам и горам оздоровит вас и запомниться на всю жизнь
							</Text>
							<Button
								background="--color-secondary"
								color="--darkL2"
								padding="12px 34px 12px 34px"
								border-radius="24px"
								text-transform="uppercase"
								letter-spacing="1.2px"
								margin="24px 0px 0px 0px"
								opacity="1"
								box-shadow="0 12px 3px -4px rgba(3, 18, 7, 0.3)"
							>
								Присоединиться
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				Идем дальше
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
			>
				Переходите на следующий шаг
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 0px 0"
				width="50%"
				color="--darkL2"
			>
				Вы отлично справились с первым шагом к знакомству с Quarkly. На следующем шаге вы углубите свои знания и приобретете навыки:
			</Text>
			<List margin="0px 0px 16px 0px">
				<Text font="--base">
					На что влияют другие свойства элементов;
				</Text>
				<Text font="--base">
					Как стилизовать состояния: hover, focused и другие;
				</Text>
				<Text font="--base">
					Как делать адаптивный дизайн;
				</Text>
				<Text font="--base">
					Как подключать шрифты из Google Fonts.
				</Text>
			</List>
			<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-1-1-dragdrop.svg" border-radius="4px" max-width="540px" />
		</Section>
		<Section
			padding="130px 0px 100px 0px"
			sm-padding="40px 0"
			background="--color-darkL2"
			border-width="0px 0px 3px 0px"
			border-style="solid"
			border-color="--color-primary"
		>
			<Override slot="SectionContent" align-items="flex-start" flex-direction="column" />
			<Text
				as="h2"
				font="--headline1"
				md-font="--headline2"
				margin="20px 0 0 0"
				width="33.33%"
				color="--light"
			>
				Введение в Quarkly
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="20px 0 0 0"
				width="66.66%"
				color="--lightD2"
			>
				Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake. I’m a great space for you to tell a story and let your site visitors know more about you. Talk about your business and what products and services you offer. Share how you came up with the idea for your company and what makes you different from your competitors. Make your business stand out and show your visitors who you are.
			</Text>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				ШАг 1 из 5
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
			>
				Добавьте элементы
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
			>
				Чтобы начать, откройте панель слоев, переключитесь на вкладку Components, затем перетащите элементы на рабочую область.
			</Text>
			<Box display="flex" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Откройте панель слоев, переключитесь на вкладку Components, выберите{" "}
								<Image
									width="24px"
									height="24px"
									vertical-align="top"
									src="https://artemzhigalin.ru/src/onboarding-tutorial-box.svg"
									margin="0px 2px 0px 2px"
								/>
								<Span
									color="--primary"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Box
								</Span>
								{" "}схватите его и бросьте в Рабочую область.
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-1-1-dragdrop.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						quarkly-title="Item 2"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							2
						</Text>
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 8px 0px"
								width="100%"
								color="--darkL2"
							>
								Затем бросьте внутрь{" "}
								<Image
									width="24px"
									height="24px"
									vertical-align="top"
									src="https://artemzhigalin.ru/src/onboarding-tutorial-box.svg"
									margin="0px 2px 0px 2px"
								/>
								<Span
									color="--primary"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Box
								</Span>
								{" "}следующие элементы сохраняя порядок:
							</Text>
							<List width="100%" box-sizing="border-box" list-style-type="none" padding="0px 0px 0px 0px">
								<Box display="flex" align-items="center" margin="0px 0px 4px 0px">
									<Icon category="bs" icon={BsDot} />
									<Image
										width="24px"
										height="24px"
										vertical-align="top"
										src="https://artemzhigalin.ru/src/onboarding-tutorial-icon.svg"
										margin="0px 4px 0px 2px"
									/>
									<Text
										display="block"
										font="--base"
										color="--primary"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										margin="0px 0px 0px 0px"
									>
										Icon
									</Text>
								</Box>
								<Box display="flex" align-items="center" margin="0px 0px 4px 0px">
									<Icon category="bs" icon={BsDot} />
									<Image
										width="24px"
										height="24px"
										vertical-align="top"
										src="https://artemzhigalin.ru/src/onboarding-tutorial-text.svg"
										margin="0px 4px 0px 2px"
									/>
									<Text
										display="block"
										font="--base"
										color="--primary"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										margin="0px 0px 0px 0px"
									>
										Text
									</Text>
								</Box>
								<Box display="flex" align-items="center" margin="0px 0px 4px 0px">
									<Icon category="bs" icon={BsDot} />
									<Image
										width="24px"
										height="24px"
										vertical-align="top"
										src="https://artemzhigalin.ru/src/onboarding-tutorial-text.svg"
										margin="0px 4px 0px 2px"
									/>
									<Text
										display="block"
										font="--base"
										color="--primary"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										margin="0px 0px 0px 0px"
									>
										Text
									</Text>
								</Box>
								<Box display="flex" align-items="center" margin="0px 0px 4px 0px">
									<Icon category="bs" icon={BsDot} />
									<Image
										width="24px"
										height="24px"
										vertical-align="top"
										src="https://artemzhigalin.ru/src/onboarding-tutorial-button.svg"
										margin="0px 4px 0px 2px"
									/>
									<Text
										display="block"
										font="--base"
										color="--primary"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										margin="0px 0px 0px 0px"
									>
										Button
									</Text>
								</Box>
							</List>
							<Text
								display="block"
								font="--base"
								margin="20px 0px 8px 0px"
								width="100%"
								color="--darkL2"
							>
								Первый элемент
								<Image
									width="24px"
									height="24px"
									vertical-align="top"
									src="https://artemzhigalin.ru/src/onboarding-tutorial-text.svg"
									margin="0px 2px 0px 2px"
								/>
								<Span
									color="--primary"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Text
								</Span>
								{"  "}будет заголовком, а второй описанием карточки.
							</Text>
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							3
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Кликните два раза на элементы, и измените текст как в примере.
						</Text>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						РАБОЧАЯ ОБЛАСТЬ
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						margin="0px 0px 20px 0px"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						padding="30px 30px 30px 30px"
						min-height="320px"
						text-align="left"
					/>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						ПРИМЕР
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box width="100%">
							<Icon category="md" icon={MdFace} size="64зч" />
							<Text>
								Лес и горы
							</Text>
							<Text>
								Удивительное путешествие по лесам и горам оздоровит вас и запомниться на всю жизнь
							</Text>
							<Button>
								Присоединиться
							</Button>
							<Hr />
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				ШАг 2 из 5
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
				letter-spacing="1px"
			>
				Стилизуйте фон
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
			>
				Теперь когда мы создали структуру карточки, давайте немного украсим её: добавим фон, скруглим углы
			</Text>
			<Box display="flex" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Выберите{" "}
								<Image
									width="24px"
									height="24px"
									vertical-align="top"
									src="https://artemzhigalin.ru/src/onboarding-tutorial-box.svg"
									margin="0px 2px 0px 2px"
								/>
								<Span
									color="--primary"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Box
								</Span>
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-1-1-dragdrop.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						quarkly-title="Item 2"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							2
						</Text>
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Перейдите в панель Styles в раздел Layout и задайте свойству Width 100%, а Height 320px
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-2-1-wh.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							3
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Теперь сохраняя выделение Box перейдите в раздел Backgrounds, кликните в поле ввода, чтобы открыть панель, выберите Type URL и введите адрес изображения:{" "}
						</Text>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							4
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Кликните два раза на элементы, и измените текст как в примере.
						</Text>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						РАБОЧАЯ ОБЛАСТЬ
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						margin="0px 0px 20px 0px"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						padding="30px 30px 30px 30px"
						min-height="320px"
						text-align="left"
					/>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						ПРИМЕР
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box width="100%" background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/cover" border-radius="12px" height="320px">
							<Icon category="md" icon={MdFace} />
							<Text>
								Лес и горы
							</Text>
							<Text>
								Удивительное путешествие по лесам и горам оздоровит вас и запомниться на всю жизнь
							</Text>
							<Button>
								Присоединиться
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				ШАг 3 из 5
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
			>
				Стилизуйте текст и кнопку
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
			>
				Попрактикуемся в новых навыках стилизации и оформим кнопку и текст так как показано в примере
			</Text>
			<Box display="flex" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Оформите ваши заголовок и описание в соответствии с примером. На этот раз воспользуйтесь вкладкой Typography
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-1-1-dragdrop.svg" border-radius="4px" />
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								ПОДСКАЗКА: Можно скопировать стили из примера используя горячие клавиши: для Mac: cmd+alt+c и cmd+alt+v, для Windows: ctrl+alt+c и ctrl+alt+v.
							</Text>
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						quarkly-title="Item 2"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							2
						</Text>
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Теперь стилизуем{" "}
								<Span
									color="--primary"
									hyphens="manual"
									overflow-wrap="normal"
									text-indent="0"
									text-overflow="clip"
									white-space="normal"
									word-break="normal"
								>
									Button
								</Span>
								. Изменим свойства: Color, Background и Border radius. Color мы изменяли только что, а Background и Border на предыдущем шаге.{" "}
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-2-1-wh.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							3
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Добавим{" "}
							<Span
								color="--primary"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Button
							</Span>
							{" "}тень. Для этого откроем вкладку Effects и свойство Box shadow. Значение скопируйте из примера.
						</Text>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							4
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Наконец добавим{" "}
							<Span
								color="--primary"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Button
							</Span>
							{" "}отступы . Добавьте margin 25px в верхнее поле, а  padding 50px в боковые и 15px в верхнее и нижнее поля.
						</Text>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						РАБОЧАЯ ОБЛАСТЬ
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						margin="0px 0px 20px 0px"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						padding="30px 30px 30px 30px"
						min-height="320px"
						text-align="left"
					/>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						ПРИМЕР
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box width="100%" background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/cover" border-radius="12px" height="320px">
							<Icon category="md" icon={MdFace} />
							<Text font="--headline2" text-transform="uppercase" color="--light" text-align="center">
								Лес и горы
							</Text>
							<Text font="--lead" color="--lightD2" text-align="center">
								Удивительное путешествие по лесам и горам оздоровит вас и запомниться на всю жизнь
							</Text>
							<Button
								background="--color-secondary"
								color="--darkL2"
								padding="12px 34px 12px 34px"
								border-radius="24px"
								text-transform="uppercase"
								letter-spacing="1.2px"
								margin="24px 0px 0px 0px"
								box-shadow="0 12px 3px -4px rgba(3, 18, 7, 0.3)"
								opacity="1"
							>
								Присоединиться
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				ШАг 4 из 5
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
			>
				Поменяйте иконку и шрифт
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
			>
				Зададим заголовку выразительный шрифт и поменяем иконку на более подходящую
			</Text>
			<Box display="flex" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Выберите заголовок, в панели стилей перейдите во вкладку Typography и нажмите на иконку  . Вы разорвали связь со значением из «темы», теперь добавим в проект новый шрифт. Для этого кликните на значение чтобы открыть панель. На панели нажмите на кнопку Add google fonts.{" "}
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-1-1-dragdrop.svg" border-radius="4px" />
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								В{" "}
								<Strong
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									модальном окне
								</Strong>
								{" "}
								<Span
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									<Span
										font="300 24px/24px --fontFamily-sans"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										выберите
									</Span>
								</Span>
								{" "}Open{" "}
								<Em
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Sans
								</Em>
								{" "}Condenced и  на него. Закрывайте окно и выбирайте его для поля Family.
							</Text>
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Теперь стилизуем{" "}
								<Span
									color="--primary"
									hyphens="manual"
									overflow-wrap="normal"
									text-indent="0"
									text-overflow="clip"
									white-space="normal"
									word-break="normal"
								>
									Button
								</Span>
								. Изменим свойства: Color, Background и Border radius. Color мы изменяли только что, а Background и Border на предыдущем шаге.{" "}
							</Text>
							<Link
								href="ya.ru"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								кликните
							</Link>
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						quarkly-title="Item 2"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							2
						</Text>
						<Box width="100%">
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-2-1-wh.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							3
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Добавим{" "}
							<Span
								color="--primary"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Button
							</Span>
							{" "}тень. Для этого откроем вкладку Effects и свойство Box shadow. Значение скопируйте из примера.
						</Text>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							4
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Наконец добавим{" "}
							<Span
								color="--primary"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Button
							</Span>
							{" "}отступы . Добавьте margin 25px в верхнее поле, а  padding 50px в боковые и 15px в верхнее и нижнее поля.
						</Text>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						РАБОЧАЯ ОБЛАСТЬ
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						margin="0px 0px 20px 0px"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						padding="30px 30px 30px 30px"
						min-height="320px"
						text-align="left"
					/>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						ПРИМЕР
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box width="100%" background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/cover" border-radius="12px" height="320px">
							<Icon category="fa" icon={FaTree} font="64px sans-serif" color="--light" />
							<Text font="normal 500 42px/1.2 --fontFamily-googleOpenSansCondensed" text-transform="uppercase" color="--light" text-align="center">
								Лес и горы
							</Text>
							<Text font="--lead" color="--lightD2" text-align="center">
								Удивительное путешествие по лесам и горам оздоровит вас и запомниться на всю жизнь
							</Text>
							<Button
								background="--color-secondary"
								color="--darkL2"
								padding="12px 34px 12px 34px"
								border-radius="24px"
								text-transform="uppercase"
								letter-spacing="1.2px"
								margin="24px 0px 0px 0px"
								box-shadow="0 12px 3px -4px rgba(3, 18, 7, 0.3)"
								opacity="1"
							>
								Присоединиться
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				ШАг 5 из 5
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
			>
				Центрируйте элементы{" "}
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
			>
				По умолчанию элементы выравниваются по верхнему левому краю.  Сделаем их по центру{" "}
				<Span
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					color="--primary"
				>
					Box
				</Span>
				{" "}c помощью display flex
			</Text>
			<Box display="flex" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Выберите{" "}
								<Span
									color="--primary"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Box
								</Span>
								{" "}на странице и откройте вкладку Layouts на панели Styles. Укажите свойству display значение flex. Это значит, что Box будет использовать flexbox —более удобный способ для выравнивания элементов.
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-1-1-dragdrop.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						quarkly-title="Item 2"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							2
						</Text>
						<Box width="100%">
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-2-1-wh.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							3
						</Text>
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Выберите значение center для свойств Align items и Justify content.
							</Text>
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								ПОДСКАЗКА: Поиграйтесь с различными значениями, чтобы понять как это работает.
							</Text>
						</Box>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						РАБОЧАЯ ОБЛАСТЬ
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						margin="0px 0px 20px 0px"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						padding="30px 30px 30px 30px"
						min-height="320px"
						text-align="left"
					>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
					</Box>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						ПРИМЕР
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box
							width="100%"
							background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/cover"
							border-radius="12px"
							height="320px"
							display="flex"
							flex-direction="column"
							align-items="center"
							justify-content="center"
							padding="48px 36px 72px 36px"
							opacity="1"
						>
							<Icon category="fa" icon={FaTree} font="64px sans-serif" color="--light" />
							<Text font="normal 500 48px/1.2 --fontFamily-googleOpenSansCondensed" text-transform="uppercase" color="--light" text-align="center">
								Лес и горы
							</Text>
							<Text font="--lead" color="--lightD2" text-align="center">
								Удивительное путешествие по лесам и горам оздоровит вас и запомниться на всю жизнь
							</Text>
							<Button
								background="--color-secondary"
								color="--darkL2"
								padding="12px 34px 12px 34px"
								border-radius="24px"
								text-transform="uppercase"
								letter-spacing="1.2px"
								margin="24px 0px 0px 0px"
								opacity="1"
								box-shadow="0 12px 3px -4px rgba(3, 18, 7, 0.3)"
							>
								Присоединиться
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				СУПЕРИГРА!
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
			>
				Отличная работа!
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
			>
				Вы создали первую карточку и изучили фундаментальные принципы веб-дизайна. Настало время проверить свои силы!
			</Text>
			<Box display="flex" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 8px 0px"
								width="100%"
								color="--darkL2"
							>
								Мы подготовили другую карточку для вас чтобы вы создали самостоятельно. Если вы что-то забыли, прокрутите наверх и всё вспомнится! Хорошего дизайна!
							</Text>
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								ПОДСКАЗКА: Выбирайте элементы в примере и смотрите их стили.
							</Text>
						</Box>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						РАБОЧАЯ ОБЛАСТЬ
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						margin="0px 0px 20px 0px"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						padding="30px 30px 30px 30px"
						min-height="320px"
						text-align="left"
					/>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						ПРИМЕР
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box
							width="100%"
							background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/cover"
							border-radius="8px"
							height="320px"
							display="flex"
							flex-direction="column"
							align-items="center"
							justify-content="center"
							padding="48px 36px 72px 36px"
							opacity="1"
						>
							<Icon category="fa" icon={FaTree} font="64px sans-serif" color="--light" />
							<Text
								font="normal 500 48px/1.2 --fontFamily-googleOpenSansCondensed"
								text-transform="uppercase"
								color="--light"
								text-align="center"
								margin="16px 0px 0px 0px"
							>
								Лес и горы
							</Text>
							<Text font="--lead" color="--lightD2" text-align="center">
								Удивительное путешествие по лесам и горам оздоровит вас и запомниться на всю жизнь
							</Text>
							<Button
								background="--color-secondary"
								color="--darkL2"
								padding="12px 34px 12px 34px"
								border-radius="24px"
								text-transform="uppercase"
								letter-spacing="1.2px"
								margin="24px 0px 0px 0px"
								opacity="1"
								box-shadow="0 12px 3px -4px rgba(3, 18, 7, 0.3)"
							>
								Присоединиться
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				Идем дальше
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
			>
				Переходите на следующий шаг
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 0px 0"
				width="50%"
				color="--darkL2"
			>
				Вы отлично справились с первым шагом к знакомству с Quarkly. На следующем шаге вы углубите свои знания и приобретете навыки:
			</Text>
			<List margin="0px 0px 16px 0px">
				<Text font="--base">
					На что влияют другие свойства элементов;
				</Text>
				<Text font="--base">
					Как стилизовать состояния: hover, focused и другие;
				</Text>
				<Text font="--base">
					Как делать адаптивный дизайн;
				</Text>
				<Text font="--base">
					Как подключать шрифты из Google Fonts.
				</Text>
			</List>
			<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-1-1-dragdrop.svg" border-radius="4px" max-width="540px" />
		</Section>
		<Section
			padding="130px 0px 100px 0px"
			sm-padding="40px 0"
			background="--color-darkL2"
			border-width="0px 0px 3px 0px"
			border-style="solid"
			border-color="--color-primary"
		>
			<Override slot="SectionContent" align-items="flex-start" flex-direction="column" />
			<Text
				as="h2"
				font="--headline1"
				md-font="--headline2"
				margin="20px 0 0 0"
				width="33.33%"
				color="--light"
			>
				Введение в Quarkly
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="20px 0 0 0"
				width="66.66%"
				color="--lightD2"
			>
				Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake. I’m a great space for you to tell a story and let your site visitors know more about you. Talk about your business and what products and services you offer. Share how you came up with the idea for your company and what makes you different from your competitors. Make your business stand out and show your visitors who you are.
			</Text>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				ШАг 1 из 5
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
			>
				Добавьте элементы
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
			>
				Чтобы начать, откройте панель слоев, переключитесь на вкладку Components, затем перетащите элементы на рабочую область.
			</Text>
			<Box display="flex" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Откройте панель слоев, переключитесь на вкладку Components, выберите{" "}
								<Image
									width="24px"
									height="24px"
									vertical-align="top"
									src="https://artemzhigalin.ru/src/onboarding-tutorial-box.svg"
									margin="0px 2px 0px 2px"
								/>
								<Span
									color="--primary"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Box
								</Span>
								{" "}схватите его и бросьте в Рабочую область.
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-1-1-dragdrop.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						quarkly-title="Item 2"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							2
						</Text>
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 8px 0px"
								width="100%"
								color="--darkL2"
							>
								Затем бросьте внутрь{" "}
								<Image
									width="24px"
									height="24px"
									vertical-align="top"
									src="https://artemzhigalin.ru/src/onboarding-tutorial-box.svg"
									margin="0px 2px 0px 2px"
								/>
								<Span
									color="--primary"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Box
								</Span>
								{" "}следующие элементы сохраняя порядок:
							</Text>
							<List width="100%" box-sizing="border-box" list-style-type="none" padding="0px 0px 0px 0px">
								<Box display="flex" align-items="center" margin="0px 0px 4px 0px">
									<Icon category="bs" icon={BsDot} />
									<Image
										width="24px"
										height="24px"
										vertical-align="top"
										src="https://artemzhigalin.ru/src/onboarding-tutorial-icon.svg"
										margin="0px 4px 0px 2px"
									/>
									<Text
										display="block"
										font="--base"
										color="--primary"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										margin="0px 0px 0px 0px"
									>
										Icon
									</Text>
								</Box>
								<Box display="flex" align-items="center" margin="0px 0px 4px 0px">
									<Icon category="bs" icon={BsDot} />
									<Image
										width="24px"
										height="24px"
										vertical-align="top"
										src="https://artemzhigalin.ru/src/onboarding-tutorial-text.svg"
										margin="0px 4px 0px 2px"
									/>
									<Text
										display="block"
										font="--base"
										color="--primary"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										margin="0px 0px 0px 0px"
									>
										Text
									</Text>
								</Box>
								<Box display="flex" align-items="center" margin="0px 0px 4px 0px">
									<Icon category="bs" icon={BsDot} />
									<Image
										width="24px"
										height="24px"
										vertical-align="top"
										src="https://artemzhigalin.ru/src/onboarding-tutorial-text.svg"
										margin="0px 4px 0px 2px"
									/>
									<Text
										display="block"
										font="--base"
										color="--primary"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										margin="0px 0px 0px 0px"
									>
										Text
									</Text>
								</Box>
								<Box display="flex" align-items="center" margin="0px 0px 4px 0px">
									<Icon category="bs" icon={BsDot} />
									<Image
										width="24px"
										height="24px"
										vertical-align="top"
										src="https://artemzhigalin.ru/src/onboarding-tutorial-button.svg"
										margin="0px 4px 0px 2px"
									/>
									<Text
										display="block"
										font="--base"
										color="--primary"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										margin="0px 0px 0px 0px"
									>
										Button
									</Text>
								</Box>
							</List>
							<Text
								display="block"
								font="--base"
								margin="20px 0px 8px 0px"
								width="100%"
								color="--darkL2"
							>
								Первый элемент
								<Image
									width="24px"
									height="24px"
									vertical-align="top"
									src="https://artemzhigalin.ru/src/onboarding-tutorial-text.svg"
									margin="0px 2px 0px 2px"
								/>
								<Span
									color="--primary"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Text
								</Span>
								{"  "}будет заголовком, а второй описанием карточки.
							</Text>
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							3
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Кликните два раза на элементы, и измените текст как в примере.
						</Text>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						РАБОЧАЯ ОБЛАСТЬ
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						margin="0px 0px 20px 0px"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						padding="30px 30px 30px 30px"
						min-height="320px"
						text-align="left"
					/>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						ПРИМЕР
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box width="100%">
							<Icon category="md" icon={MdFace} size="64зч" />
							<Text>
								Лес и горы
							</Text>
							<Text>
								Удивительное путешествие по лесам и горам оздоровит вас и запомниться на всю жизнь
							</Text>
							<Button>
								Присоединиться
							</Button>
							<Hr />
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				ШАг 2 из 5
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
				letter-spacing="1px"
			>
				Стилизуйте фон
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
			>
				Теперь когда мы создали структуру карточки, давайте немного украсим её: добавим фон, скруглим углы
			</Text>
			<Box display="flex" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Выберите{" "}
								<Image
									width="24px"
									height="24px"
									vertical-align="top"
									src="https://artemzhigalin.ru/src/onboarding-tutorial-box.svg"
									margin="0px 2px 0px 2px"
								/>
								<Span
									color="--primary"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Box
								</Span>
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-1-1-dragdrop.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						quarkly-title="Item 2"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							2
						</Text>
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Перейдите в панель Styles в раздел Layout и задайте свойству Width 100%, а Height 320px
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-2-1-wh.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							3
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Теперь сохраняя выделение Box перейдите в раздел Backgrounds, кликните в поле ввода, чтобы открыть панель, выберите Type URL и введите адрес изображения:{" "}
						</Text>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							4
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Кликните два раза на элементы, и измените текст как в примере.
						</Text>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						РАБОЧАЯ ОБЛАСТЬ
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						margin="0px 0px 20px 0px"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						padding="30px 30px 30px 30px"
						min-height="320px"
						text-align="left"
					/>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						ПРИМЕР
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box width="100%" background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/cover" border-radius="12px" height="320px">
							<Icon category="md" icon={MdFace} />
							<Text>
								Лес и горы
							</Text>
							<Text>
								Удивительное путешествие по лесам и горам оздоровит вас и запомниться на всю жизнь
							</Text>
							<Button>
								Присоединиться
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				ШАг 3 из 5
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
			>
				Стилизуйте текст и кнопку
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
			>
				Попрактикуемся в новых навыках стилизации и оформим кнопку и текст так как показано в примере
			</Text>
			<Box display="flex" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Оформите ваши заголовок и описание в соответствии с примером. На этот раз воспользуйтесь вкладкой Typography
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-1-1-dragdrop.svg" border-radius="4px" />
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								ПОДСКАЗКА: Можно скопировать стили из примера используя горячие клавиши: для Mac: cmd+alt+c и cmd+alt+v, для Windows: ctrl+alt+c и ctrl+alt+v.
							</Text>
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						quarkly-title="Item 2"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							2
						</Text>
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Теперь стилизуем{" "}
								<Span
									color="--primary"
									hyphens="manual"
									overflow-wrap="normal"
									text-indent="0"
									text-overflow="clip"
									white-space="normal"
									word-break="normal"
								>
									Button
								</Span>
								. Изменим свойства: Color, Background и Border radius. Color мы изменяли только что, а Background и Border на предыдущем шаге.{" "}
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-2-1-wh.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							3
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Добавим{" "}
							<Span
								color="--primary"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Button
							</Span>
							{" "}тень. Для этого откроем вкладку Effects и свойство Box shadow. Значение скопируйте из примера.
						</Text>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							4
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Наконец добавим{" "}
							<Span
								color="--primary"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Button
							</Span>
							{" "}отступы . Добавьте margin 25px в верхнее поле, а  padding 50px в боковые и 15px в верхнее и нижнее поля.
						</Text>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						РАБОЧАЯ ОБЛАСТЬ
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						margin="0px 0px 20px 0px"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						padding="30px 30px 30px 30px"
						min-height="320px"
						text-align="left"
					/>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						ПРИМЕР
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box width="100%" background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/cover" border-radius="12px" height="320px">
							<Icon category="md" icon={MdFace} />
							<Text font="--headline2" text-transform="uppercase" color="--light" text-align="center">
								Лес и горы
							</Text>
							<Text font="--lead" color="--lightD2" text-align="center">
								Удивительное путешествие по лесам и горам оздоровит вас и запомниться на всю жизнь
							</Text>
							<Button
								background="--color-secondary"
								color="--darkL2"
								padding="12px 34px 12px 34px"
								border-radius="24px"
								text-transform="uppercase"
								letter-spacing="1.2px"
								margin="24px 0px 0px 0px"
								box-shadow="0 12px 3px -4px rgba(3, 18, 7, 0.3)"
								opacity="1"
							>
								Присоединиться
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				ШАг 4 из 5
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
			>
				Поменяйте иконку и шрифт
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
			>
				Зададим заголовку выразительный шрифт и поменяем иконку на более подходящую
			</Text>
			<Box display="flex" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Выберите заголовок, в панели стилей перейдите во вкладку Typography и нажмите на иконку  . Вы разорвали связь со значением из «темы», теперь добавим в проект новый шрифт. Для этого кликните на значение чтобы открыть панель. На панели нажмите на кнопку Add google fonts.{" "}
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-1-1-dragdrop.svg" border-radius="4px" />
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								В{" "}
								<Strong
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									модальном окне
								</Strong>
								{" "}
								<Span
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									<Span
										font="300 24px/24px --fontFamily-sans"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										выберите
									</Span>
								</Span>
								{" "}Open{" "}
								<Em
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Sans
								</Em>
								{" "}Condenced и  на него. Закрывайте окно и выбирайте его для поля Family.
							</Text>
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Теперь стилизуем{" "}
								<Span
									color="--primary"
									hyphens="manual"
									overflow-wrap="normal"
									text-indent="0"
									text-overflow="clip"
									white-space="normal"
									word-break="normal"
								>
									Button
								</Span>
								. Изменим свойства: Color, Background и Border radius. Color мы изменяли только что, а Background и Border на предыдущем шаге.{" "}
							</Text>
							<Link
								href="ya.ru"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								кликните
							</Link>
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						quarkly-title="Item 2"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							2
						</Text>
						<Box width="100%">
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-2-1-wh.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							3
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Добавим{" "}
							<Span
								color="--primary"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Button
							</Span>
							{" "}тень. Для этого откроем вкладку Effects и свойство Box shadow. Значение скопируйте из примера.
						</Text>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							4
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							Наконец добавим{" "}
							<Span
								color="--primary"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Button
							</Span>
							{" "}отступы . Добавьте margin 25px в верхнее поле, а  padding 50px в боковые и 15px в верхнее и нижнее поля.
						</Text>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						РАБОЧАЯ ОБЛАСТЬ
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						margin="0px 0px 20px 0px"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						padding="30px 30px 30px 30px"
						min-height="320px"
						text-align="left"
					/>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						ПРИМЕР
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box width="100%" background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/cover" border-radius="12px" height="320px">
							<Icon category="fa" icon={FaTree} font="64px sans-serif" color="--light" />
							<Text font="normal 500 42px/1.2 --fontFamily-googleOpenSansCondensed" text-transform="uppercase" color="--light" text-align="center">
								Лес и горы
							</Text>
							<Text font="--lead" color="--lightD2" text-align="center">
								Удивительное путешествие по лесам и горам оздоровит вас и запомниться на всю жизнь
							</Text>
							<Button
								background="--color-secondary"
								color="--darkL2"
								padding="12px 34px 12px 34px"
								border-radius="24px"
								text-transform="uppercase"
								letter-spacing="1.2px"
								margin="24px 0px 0px 0px"
								box-shadow="0 12px 3px -4px rgba(3, 18, 7, 0.3)"
								opacity="1"
							>
								Присоединиться
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				ШАг 5 из 5
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
			>
				Центрируйте элементы{" "}
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
			>
				По умолчанию элементы выравниваются по верхнему левому краю.  Сделаем их по центру{" "}
				<Span
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					color="--primary"
				>
					Box
				</Span>
				{" "}c помощью display flex
			</Text>
			<Box display="flex" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Выберите{" "}
								<Span
									color="--primary"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Box
								</Span>
								{" "}на странице и откройте вкладку Layouts на панели Styles. Укажите свойству display значение flex. Это значит, что Box будет использовать flexbox —более удобный способ для выравнивания элементов.
							</Text>
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-1-1-dragdrop.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						quarkly-title="Item 2"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							2
						</Text>
						<Box width="100%">
							<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-2-1-wh.svg" border-radius="4px" />
						</Box>
					</Box>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="row"
						flex-wrap="nowrap"
						quarkly-title="Item 3"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 1"
							min-width="12px"
						>
							3
						</Text>
						<Box width="100%">
							<Text
								display="block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								Выберите значение center для свойств Align items и Justify content.
							</Text>
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								ПОДСКАЗКА: Поиграйтесь с различными значениями, чтобы понять как это работает.
							</Text>
						</Box>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						РАБОЧАЯ ОБЛАСТЬ
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						margin="0px 0px 20px 0px"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						padding="30px 30px 30px 30px"
						min-height="320px"
						text-align="left"
					>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
						<Text
							display="block"
							font="--base"
							margin="20px 0px 16px 0px"
							width="100%"
							color="--darkL2"
						>
							После того как мы выбрали значение Flex для display, в группе Layout появились новые свойства. Найдите Flex direction и выберите значение column
						</Text>
					</Box>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						ПРИМЕР
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box
							width="100%"
							background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/cover"
							border-radius="12px"
							height="320px"
							display="flex"
							flex-direction="column"
							align-items="center"
							justify-content="center"
							padding="48px 36px 72px 36px"
							opacity="1"
						>
							<Icon category="fa" icon={FaTree} font="64px sans-serif" color="--light" />
							<Text font="normal 500 48px/1.2 --fontFamily-googleOpenSansCondensed" text-transform="uppercase" color="--light" text-align="center">
								Лес и горы
							</Text>
							<Text font="--lead" color="--lightD2" text-align="center">
								Удивительное путешествие по лесам и горам оздоровит вас и запомниться на всю жизнь
							</Text>
							<Button
								background="--color-secondary"
								color="--darkL2"
								padding="12px 34px 12px 34px"
								border-radius="24px"
								text-transform="uppercase"
								letter-spacing="1.2px"
								margin="24px 0px 0px 0px"
								opacity="1"
								box-shadow="0 12px 3px -4px rgba(3, 18, 7, 0.3)"
							>
								Присоединиться
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				СУПЕРИГРА!
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
			>
				Отличная работа!
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 30px 0"
				width="50%"
				color="--darkL2"
			>
				Вы создали первую карточку и изучили фундаментальные принципы веб-дизайна. Настало время проверить свои силы!
			</Text>
			<Box display="flex" width="100%">
				<List
					as="ol"
					list-style-type="none"
					padding="0px 12px 0px 0px"
					margin="0px 0px 16px 0px"
					width="33.33%"
					box-sizing="border-box"
				>
					<Box
						width="auto"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						quarkly-title="Item 1"
						flex-wrap="nowrap"
						margin="0px 0px 12px 0px"
					>
						<Text
							background="--color-darkL2"
							font="--base"
							color="--lightD2"
							padding="4px 10px 4px 10px"
							border-radius="33px"
							margin="16px 12px 16px 0px"
							text-align="center"
							flex="0 0 auto"
							min-width="12px"
						>
							1
						</Text>
						<Box width="100%">
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 8px 0px"
								width="100%"
								color="--darkL2"
							>
								Мы подготовили другую карточку для вас чтобы вы создали самостоятельно. Если вы что-то забыли, прокрутите наверх и всё вспомнится! Хорошего дизайна!
							</Text>
							<Text
								display="inline-block"
								font="--base"
								margin="20px 0px 16px 0px"
								width="100%"
								color="--darkL2"
							>
								ПОДСКАЗКА: Выбирайте элементы в примере и смотрите их стили.
							</Text>
						</Box>
					</Box>
				</List>
				<Box
					width="66.66%"
					text-align="center"
					position="relative"
					padding="0px 0px 0px 54px"
					box-sizing="border-box"
				>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						РАБОЧАЯ ОБЛАСТЬ
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						margin="0px 0px 20px 0px"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						padding="30px 30px 30px 30px"
						min-height="320px"
						text-align="left"
					/>
					<Text
						text-align="center"
						as="p"
						font="--capture"
						margin="0 auto 0px auto"
						text-transform="uppercase"
						color="--grey"
						display="inline-block"
						background="#FFF"
						padding="6px 12px 6px 12px"
						position="relative"
						top="13px"
						border-style="solid"
						border-width="1px"
						border-color="--color-lightD2"
					>
						ПРИМЕР
					</Text>
					<Box
						background="rgba(237, 242, 246, 0) repeating-linear-gradient(-45deg,--color-light 0px,--color-light 5px,rgba(0,0,0,0) 5px,rgba(0,0,0,0) 10px) center center space"
						border-style="dashed"
						border-width="1px"
						border-color="--color-grey"
						box-sizing="border-box"
						margin="0px 0px 20px 0px"
						padding="30px 30px 30px 30px"
						display="flex"
						min-height="320px"
						text-align="left"
					>
						<Box
							width="100%"
							background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1593431074633-21ef64707d29?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/cover"
							border-radius="8px"
							height="320px"
							display="flex"
							flex-direction="column"
							align-items="center"
							justify-content="center"
							padding="48px 36px 72px 36px"
							opacity="1"
						>
							<Icon category="fa" icon={FaTree} font="64px sans-serif" color="--light" />
							<Text
								font="normal 500 48px/1.2 --fontFamily-googleOpenSansCondensed"
								text-transform="uppercase"
								color="--light"
								text-align="center"
								margin="16px 0px 0px 0px"
							>
								Лес и горы
							</Text>
							<Text font="--lead" color="--lightD2" text-align="center">
								Удивительное путешествие по лесам и горам оздоровит вас и запомниться на всю жизнь
							</Text>
							<Button
								background="--color-secondary"
								color="--darkL2"
								padding="12px 34px 12px 34px"
								border-radius="24px"
								text-transform="uppercase"
								letter-spacing="1.2px"
								margin="24px 0px 0px 0px"
								opacity="1"
								box-shadow="0 12px 3px -4px rgba(3, 18, 7, 0.3)"
							>
								Присоединиться
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" />
			<Text
				as="p"
				font="--capture"
				margin="0 0 20px 0"
				text-transform="uppercase"
				color="--grey"
			>
				Идем дальше
			</Text>
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline2"
				margin="0px 0px 20px 0px"
				color="--dark"
			>
				Переходите на следующий шаг
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 0px 0"
				width="50%"
				color="--darkL2"
			>
				Вы отлично справились с первым шагом к знакомству с Quarkly. На следующем шаге вы углубите свои знания и приобретете навыки:
			</Text>
			<List margin="0px 0px 16px 0px">
				<Text font="--base">
					На что влияют другие свойства элементов;
				</Text>
				<Text font="--base">
					Как стилизовать состояния: hover, focused и другие;
				</Text>
				<Text font="--base">
					Как делать адаптивный дизайн;
				</Text>
				<Text font="--base">
					Как подключать шрифты из Google Fonts.
				</Text>
			</List>
			<Image width="100%" src="https://artemzhigalin.ru/src/onboarding-tutorial-1-1-dragdrop.svg" border-radius="4px" max-width="540px" />
		</Section>
	</Theme>;
});