<?php
if (issert($_POST['firstName'], $_POST['lastName'], $_POST['DOB'], $_POST['email'])) {
	print_r($_POST)
}