CREATE DATABASE [BD_FORM]

USE [BD_FORM]
GO

DROP TABLE IF EXISTS dbo.tb_form
/****** Object:  Table [dbo].[tb_form]    Script Date: 9/16/2024 3:58:13 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[tb_form](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[name_form] [varchar](150) NULL,
	[description_form] [varchar](200) NULL,
	[config_form] [text] NULL,
	[state] [bit] NULL,
	[created_date] [datetime] NULL,
	[updated_date] [datetime] NULL,
 CONSTRAINT [PK_tb_form] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO




USE [BD_FORM]
GO

DROP TABLE IF EXISTS dbo.tb_data_form
/****** Object:  Table [dbo].[tb_data_form]    Script Date: 9/16/2024 3:58:03 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[tb_data_form](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[id_form] [bigint] NULL,
	[data_form] [text] NULL,
	[state] [bit] NULL,
	[created_date] [datetime] NULL,
	[updated_date] [datetime] NULL,
 CONSTRAINT [PK_tb_data_form] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [dbo].[tb_data_form]  WITH CHECK ADD  CONSTRAINT [FK_tb_data_form_tb_form] FOREIGN KEY([id_form])
REFERENCES [dbo].[tb_form] ([id])
GO

ALTER TABLE [dbo].[tb_data_form] CHECK CONSTRAINT [FK_tb_data_form_tb_form]
GO