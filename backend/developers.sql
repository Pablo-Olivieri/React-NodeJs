-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 12-05-2022 a las 01:03:34
-- Versión del servidor: 5.7.34
-- Versión de PHP: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `developers`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

CREATE TABLE `novedades` (
  `id` int(11) NOT NULL,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL,
  `img_id` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`, `img_id`) VALUES
(1, 'El Gobierno aumentó el control sobre la compra del “dólar bolsa”', 'Esto se debe a una medida de la UIF que, si bien aumentó el umbral de los controles en pesos, en los hechos convalidó un piso más bajo en dólares a partir del cual hay que informar la adquisición del MEP a partir de los USD 600', 'Originalmente el umbral era de $ 40.000 (año 2018), luego se actualizo en 2019 mediante la Resolución 117/2019 a $ 56.000 y ahora se lo llevó a $ 120.000.\r\n\r\nSin embargo, si se toman los montos en dólares, en los hechos el umbral del control bajó en forma considerable en los últimos cuatro años.\r\n\r\nEn 2017, con el dólar a $ 17, este umbral equivalía a unos USD 2500, mientras que ahora implica un piso de 600 dólares aproximadamente, según cálculos del mercado.\r\n\r\nSe trata del Monto máximo de las operaciones de aportes comprometidos realizadas en el marco de Sistemas de Financiamiento Colectivo a las que se puede aplicar las medidas de Debida Diligencia Simplificada.', NULL),
(2, 'Control sobre la compra del “dólar bolsa”', 'Esto se debe a una medida de la UIF que, si bien aumentó el umbral de los controles en pesos, en los hechos convalidó un piso más bajo en dólares a partir del cual hay que informar la adquisición del MEP a partir de los USD 600', 'Originalmente el umbral era de $ 40.000 (año 2018), luego se actualizo en 2019 mediante la Resolución 117/2019 a $ 56.000 y ahora se lo llevó a $ 120.000.\r\n\r\nSin embargo, si se toman los montos en dólares, en los hechos el umbral del control bajó en forma considerable en los últimos cuatro años.\r\n\r\nEn 2017, con el dólar a $ 17, este umbral equivalía a unos USD 2500, mientras que ahora implica un piso de 600 dólares aproximadamente, según cálculos del mercado.\r\n\r\nSe trata del Monto máximo de las operaciones de aportes comprometidos realizadas en el marco de Sistemas de Financiamiento Colectivo a las que se puede aplicar las medidas de Debida Diligencia Simplificada.', NULL),
(3, 'modificar', 'funcion modificar', 'probando funcion modificar', NULL),
(4, 'agregar', 'funcion agregar', 'probando func agregar', NULL),
(6, 'otra prueba', 'ahora vamos con otra prueba', 'a ver si ahora funciona!!!', 'ucfy5gbafigbx2glvohk');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `usuario` varchar(60) NOT NULL,
  `password` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'pablo', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'pedro ', '81dc9bdb52d04dc20036dbd8313ed055'),
(3, 'flavia', '81dc9bdb52d04dc20036dbd8313ed055');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `novedades`
--
ALTER TABLE `novedades`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `novedades`
--
ALTER TABLE `novedades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
