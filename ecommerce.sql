-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Apr 09, 2018 at 05:29 PM
-- Server version: 5.6.38
-- PHP Version: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `ecommerce`
--

-- --------------------------------------------------------

--
-- Table structure for table `admindata`
--

CREATE TABLE `admindata` (
  `id` int(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `nama` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id` int(100) NOT NULL,
  `user_id` varchar(100) NOT NULL,
  `sizeandstockProduct_id` varchar(100) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `warna` varchar(100) NOT NULL,
  `size` varchar(100) NOT NULL,
  `qty` int(100) NOT NULL,
  `harga` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `invoice_data`
--

CREATE TABLE `invoice_data` (
  `id` int(100) NOT NULL,
  `user_id` varchar(100) NOT NULL,
  `kode_invoice` varchar(100) NOT NULL,
  `total_harga` int(100) NOT NULL,
  `nama_penerima` varchar(100) NOT NULL,
  `alamat_penerima` varchar(100) NOT NULL,
  `telp_penerima` int(100) NOT NULL,
  `tanggal` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `invoice_data`
--

INSERT INTO `invoice_data` (`id`, `user_id`, `kode_invoice`, `total_harga`, `nama_penerima`, `alamat_penerima`, `telp_penerima`, `tanggal`) VALUES
(1, '5', 'INV532218', 6060, 'Pasya', 'kalibata', 123, '2018-04-08 22:41:18.015000'),
(2, '5', 'INV532253', 6060, 'Pasya', 'kalibata', 123, '2018-04-08 22:42:53.142000'),
(3, '5', 'INV532327', 1212, 'Pasya', 'kalibata', 123, '2018-04-08 23:12:27.277000'),
(4, '11', 'INV1132350', 1212, 'rendi', 'casa deparco', 123, '2018-04-09 23:11:50.991000');

-- --------------------------------------------------------

--
-- Table structure for table `invoice_detail`
--

CREATE TABLE `invoice_detail` (
  `id` int(100) NOT NULL,
  `kode_invoice` varchar(100) NOT NULL,
  `nama_product` varchar(100) NOT NULL,
  `warna` varchar(100) NOT NULL,
  `size` varchar(100) NOT NULL,
  `qty` int(100) NOT NULL,
  `harga` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `invoice_detail`
--

INSERT INTO `invoice_detail` (`id`, `kode_invoice`, `nama_product`, `warna`, `size`, `qty`, `harga`) VALUES
(8, 'INV532253', 'baju', 'merah', 'S', 5, 1212),
(9, 'INV532327', 'baju', 'merah', 'S', 1, 1212),
(10, 'INV1132350', 'baju', 'merah', 'S', 1, 1212),
(11, 'INV1132350', 'kimono', 'merah', 'XL', 10, 20000);

-- --------------------------------------------------------

--
-- Table structure for table `kategori`
--

CREATE TABLE `kategori` (
  `id` int(100) NOT NULL,
  `season_id` varchar(100) NOT NULL,
  `kategori` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `kategori`
--

INSERT INTO `kategori` (`id`, `season_id`, `kategori`) VALUES
(1, '1', 'top'),
(2, '1', 'bottom'),
(86, '1', 'aksesoris'),
(87, '1', 'ayam'),
(88, '44', 'top'),
(89, '2', 'top'),
(90, '1', 'top');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(100) NOT NULL,
  `kategori_id` varchar(100) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `harga` varchar(100) NOT NULL,
  `deskripsi` varchar(100) NOT NULL,
  `gambar` varchar(100) NOT NULL,
  `tglMasukProduct` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `kategori_id`, `nama`, `harga`, `deskripsi`, `gambar`, `tglMasukProduct`) VALUES
(109, '1', 'jaket parka', '30000', 'ini jaket parka musim dingin', 'image.jpeg', '2018-04-09 22:39:40.439000');

-- --------------------------------------------------------

--
-- Table structure for table `season`
--

CREATE TABLE `season` (
  `id` int(100) NOT NULL,
  `season` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `season`
--

INSERT INTO `season` (`id`, `season`) VALUES
(1, 'winter'),
(2, 'summer'),
(3, 'spring'),
(44, 'hujan');

-- --------------------------------------------------------

--
-- Table structure for table `sizeStockProduct`
--

CREATE TABLE `sizeStockProduct` (
  `id` int(100) NOT NULL,
  `warnaProduct_id` varchar(100) NOT NULL,
  `size` varchar(100) NOT NULL,
  `stock` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `sizeStockProduct`
--

INSERT INTO `sizeStockProduct` (`id`, `warnaProduct_id`, `size`, `stock`) VALUES
(13, '22', '20', '20'),
(14, '23', 'XL', '10'),
(15, '23', 'L', '20'),
(16, '23', 'S', '30'),
(17, '24', 'XL', '20'),
(18, '25', 'XL', '10'),
(19, '25', 'L', '10'),
(20, '25', 'S', '28'),
(21, '25', 'M', '50'),
(22, '26', 'L', '20'),
(23, '22', 'XL', '20'),
(24, '22', 'XL', '30'),
(25, '28', 'S', '50');

-- --------------------------------------------------------

--
-- Table structure for table `userdata`
--

CREATE TABLE `userdata` (
  `id` int(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `role` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `userdata`
--

INSERT INTO `userdata` (`id`, `email`, `password`, `nama`, `role`) VALUES
(5, 'user@gmail.com', 'ebd5359e500475700c6cc3dd4af89cfd0569aa31724a1bf10ed1e3019dcfdb11', 'user', 0),
(6, 'admin@yahoo.com', 'ebd5359e500475700c6cc3dd4af89cfd0569aa31724a1bf10ed1e3019dcfdb11', 'admin', 1),
(8, 'user@gmail.com', 'a4f8d1682b29eb57cc0a4846b03630731673b2c49bd3d7eb418a1ab1908f6db3', 'user', 0),
(9, 'rendi@gmail.com', 'a4f8d1682b29eb57cc0a4846b03630731673b2c49bd3d7eb418a1ab1908f6db3', 'rendi', 0),
(10, 'halo@gmail.com', '1978a5a04fe7fa6ad9de7000bfc8fe2bd00528df11951dca5ea5c5dea504bceb', 'halo', 0),
(11, '123@gmail.com', 'a4f8d1682b29eb57cc0a4846b03630731673b2c49bd3d7eb418a1ab1908f6db3', '123', 1);

-- --------------------------------------------------------

--
-- Table structure for table `warnaProduct`
--

CREATE TABLE `warnaProduct` (
  `id` int(100) NOT NULL,
  `product_id` varchar(100) NOT NULL,
  `warna` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `warnaProduct`
--

INSERT INTO `warnaProduct` (`id`, `product_id`, `warna`) VALUES
(22, '102', 'merah'),
(23, '107', 'abu2'),
(24, '107', 'hijau'),
(25, '103', 'merah'),
(26, '103', 'hijau'),
(27, '102', 'kuning'),
(28, '108', 'merah');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admindata`
--
ALTER TABLE `admindata`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `invoice_data`
--
ALTER TABLE `invoice_data`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `invoice_detail`
--
ALTER TABLE `invoice_detail`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `kategori`
--
ALTER TABLE `kategori`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `season`
--
ALTER TABLE `season`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sizeStockProduct`
--
ALTER TABLE `sizeStockProduct`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `userdata`
--
ALTER TABLE `userdata`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `warnaProduct`
--
ALTER TABLE `warnaProduct`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admindata`
--
ALTER TABLE `admindata`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `invoice_data`
--
ALTER TABLE `invoice_data`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `invoice_detail`
--
ALTER TABLE `invoice_detail`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `kategori`
--
ALTER TABLE `kategori`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=91;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=110;

--
-- AUTO_INCREMENT for table `season`
--
ALTER TABLE `season`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT for table `sizeStockProduct`
--
ALTER TABLE `sizeStockProduct`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `userdata`
--
ALTER TABLE `userdata`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `warnaProduct`
--
ALTER TABLE `warnaProduct`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
