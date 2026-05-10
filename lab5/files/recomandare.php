<?php
$nume       = $_POST['nume'];
$vehicul    = $_POST['vehicul'];
$prioritate = $_POST['prioritate'];
$comentarii = $_POST['comentarii'];

$motor = "";
$motiv = "";

if ($prioritate == "economie") {
    $motor = "EcoBoost 1.5L cu 3 cilindri";
    $motiv = "Este motorul cel mai eficient din familie, 
              cu tehnologie de dezactivare a cilindrilor 
              și construcție integrală din aluminiu.";
} elseif ($prioritate == "putere") {
    $motor = "EcoBoost 1.5L cu 3 cilindri";
    $motiv = "Cu 197 CP la 6000 rpm, oferă cea mai mare putere 
              din gama 1.5L EcoBoost.";
} elseif ($prioritate == "echilibru") {
    $motor = "EcoBoost 1.5L cu 4 cilindri";
    $motiv = "Funcționare mai lină și mai stabilă datorită 
              configurației cu 4 cilindri, cu 251 Nm cuplu maxim.";
} else {
    $motor = "EcoBoost 1.5L";
    $motiv = "Vă recomandăm să consultați pagina de comparație 
              pentru mai multe detalii.";
}
?>
<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recomandare EcoBoost</title>
    <link rel="stylesheet" href="../style.css">
</head>
<body>

    <header class="page-header">
        <h1>EcoBoost 1.5L &mdash; Recomandarea ta</h1>
        <div class="header-divider"></div>
    </header>

    <nav class="navbar">
        <a href="../index.html" class="nav-link">Acasă</a>
        <a href="ecoboost_3c.html" class="nav-link">Motor 3 cilindri</a>
        <a href="ecoboost_4c.html" class="nav-link">Motor 4 cilindri</a>
        <a href="comparatie.html" class="nav-link">Comparație</a>
        <a href="formular.html" class="nav-link">Recomandare</a>
    </nav>

    <div class="main-container">

        <h2 class="section-title">Rezultatul analizei</h2>

        <p class="summary-text">
            Bună ziua, <strong><?php echo htmlspecialchars($nume); ?></strong>!<br><br>
            Pe baza răspunsurilor dumneavoastră, vă recomandăm:<br><br>
            <strong style="color:#e8521a; font-size:1.2rem;">
                <?php echo $motor; ?>
            </strong><br><br>
            <?php echo $motiv; ?>
        </p>

        <div class="table-wrapper">
            <table class="data-table">
                <tr>
                    <th>Câmp</th>
                    <th>Răspunsul dumneavoastră</th>
                </tr>
                <tr>
                    <td>Nume</td>
                    <td><?php echo htmlspecialchars($nume); ?></td>
                </tr>
                <tr>
                    <td>Tip vehicul</td>
                    <td><?php echo htmlspecialchars($vehicul); ?></td>
                </tr>
                <tr>
                    <td>Prioritate</td>
                    <td><?php echo htmlspecialchars($prioritate); ?></td>
                </tr>
                <tr>
                    <td>Comentarii</td>
                    <td><?php echo htmlspecialchars($comentarii); ?></td>
                </tr>
            </table>
        </div>

        <div class="back-link-wrapper">
            <a href="formular.html" class="back-link">&#8592; Înapoi la formular</a>
        </div>

    </div>

    <footer class="page-footer">
        &copy; Ford EcoBoost 1.5L &nbsp;|&nbsp; 
        <?php echo date("H:i:s"); ?>
    </footer>

</body>
</html>