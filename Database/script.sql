USE [master]
GO
/****** Object:  Database [Accura_Tech]    Script Date: 4/17/2023 12:06:23 AM ******/
CREATE DATABASE [Accura_Tech]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Accura_Tech', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\Accura_Tech.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'Accura_Tech_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\Accura_Tech_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [Accura_Tech] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Accura_Tech].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Accura_Tech] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Accura_Tech] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Accura_Tech] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Accura_Tech] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Accura_Tech] SET ARITHABORT OFF 
GO
ALTER DATABASE [Accura_Tech] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [Accura_Tech] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Accura_Tech] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Accura_Tech] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Accura_Tech] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Accura_Tech] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Accura_Tech] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Accura_Tech] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Accura_Tech] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Accura_Tech] SET  ENABLE_BROKER 
GO
ALTER DATABASE [Accura_Tech] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Accura_Tech] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Accura_Tech] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Accura_Tech] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Accura_Tech] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Accura_Tech] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Accura_Tech] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Accura_Tech] SET RECOVERY FULL 
GO
ALTER DATABASE [Accura_Tech] SET  MULTI_USER 
GO
ALTER DATABASE [Accura_Tech] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Accura_Tech] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Accura_Tech] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Accura_Tech] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [Accura_Tech] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [Accura_Tech] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'Accura_Tech', N'ON'
GO
ALTER DATABASE [Accura_Tech] SET QUERY_STORE = OFF
GO
USE [Accura_Tech]
GO
/****** Object:  Table [dbo].[Department]    Script Date: 4/17/2023 12:06:24 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Department](
	[DepartmentID] [int] IDENTITY(1,1) NOT NULL,
	[DepartmentName] [varchar](500) NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Employee]    Script Date: 4/17/2023 12:06:24 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Employee](
	[EmployeeID] [int] IDENTITY(1,1) NOT NULL,
	[FirstName] [varchar](500) NULL,
	[LastName] [varchar](500) NULL,
	[Gender] [varchar](20) NULL,
	[DateOfBirth] [date] NULL,
	[Address] [varchar](500) NULL,
	[Department] [varchar](500) NULL,
	[BasicSalary] [money] NULL
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Department] ON 

INSERT [dbo].[Department] ([DepartmentID], [DepartmentName]) VALUES (1, N'Software')
INSERT [dbo].[Department] ([DepartmentID], [DepartmentName]) VALUES (2, N'Accounts')
SET IDENTITY_INSERT [dbo].[Department] OFF
GO
SET IDENTITY_INSERT [dbo].[Employee] ON 

INSERT [dbo].[Employee] ([EmployeeID], [FirstName], [LastName], [Gender], [DateOfBirth], [Address], [Department], [BasicSalary]) VALUES (8, N'Ganidu', N'Jayasanka', N'Male', CAST(N'1999-07-28' AS Date), N'Seeduwa', N'Software', 80000.0000)
SET IDENTITY_INSERT [dbo].[Employee] OFF
GO
USE [master]
GO
ALTER DATABASE [Accura_Tech] SET  READ_WRITE 
GO
