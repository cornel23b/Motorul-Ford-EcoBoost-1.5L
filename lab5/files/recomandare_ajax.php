<?php
$nume       = isset($_POST['nume'])       ? $_POST['nume']       : '';
$vehicul    = isset($_POST['vehicul'])    ? $_POST['vehicul']    : '';
$prioritate = isset($_POST['prioritate']) ? $_POST['prioritate'] : '';
$comentarii = isset($_POST['comentarii']) ? $_POST['comentarii'] : '';

$motor = "";
$motiv = "";

if ($prioritate == "economie") {
    $motor = "EcoBoost 1.5L cu 3 cilindri";
    $motiv = "Este motorul cel mai eficient din familie, cu tehnologie de dezactivare a cilindrilor si constructie integrala din aluminiu.";
} elseif ($prioritate == "putere") {
    $motor = "EcoBoost 1.5L cu 3 cilindri";
    $motiv = "Cu 197 CP la 6000 rpm, ofera cea mai mare putere din gama 1.5L EcoBoost.";
} elseif ($prioritate == "echilibru") {
    $motor = "EcoBoost 1.5L cu 4 cilindri";
    $motiv = "Functionare mai lina si mai stabila datorita configuratiei cu 4 cilindri, cu 251 Nm cuplu maxim.";
} else {
    $motor = "EcoBoost 1.5L";
    $motiv = "Va recomandam sa consultati pagina de comparatie pentru mai multe detalii.";
}
?>

<p class="summary-text">
    Buna ziua, <strong><?php echo htmlspecialchars($nume); ?></strong>!<br><br>
    Pe baza raspunsurilor dumneavoastra, va recomandam:<br><br>
    <strong style="color:#e8521a; font-size:1.2rem;">
        <?php echo $motor; ?>
    </strong><br><br>
    <?php echo $motiv; ?>
</p>

<div class="table-wrapper">
    <table class="data-table">
        <tr><th>Camp</th><th>Raspunsul dumneavoastra</th></tr>
        <tr><td>Nume</td><td><?php echo htmlspecialchars($nume); ?></td></tr>
        <tr><td>Tip vehicul</td><td><?php echo htmlspecialchars($vehicul); ?></td></tr>
        <tr><td>Prioritate</td><td><?php echo htmlspecialchars($prioritate); ?></td></tr>
        <tr><td>Comentarii</td><td><?php echo htmlspecialchars($comentarii); ?></td></tr>
    </table>
</div>