<?php
$cakeDescription = 'CakeVue Application';
?>
<!DOCTYPE html>
<html>
<head>
    <?= $this->Html->charset() ?>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
        <?= $cakeDescription ?>:
        <?= $this->fetch('title') ?>
    </title>
    <?= $this->Html->meta('icon') ?>
    <?= $this->Mix->htmlCss('app'); ?>
    <?= $this->fetch('meta') ?>
    <?= $this->fetch('css') ?>
    <?= $this->fetch('script') ?>
    <link href="https://fonts.googleapis.com/css?family=Sawarabi+Gothic&display=swap" rel="stylesheet">
</head>
<body class="bg-gray-100">
    <div class="max-w-sm mx-auto p-6 bg-white rounded-lg shadow-xl">
        <h1 class="block text-xl font-bold leading-normal font-sans">ユーティリティ・ファースト</h1>
        <p class="block text-base font-normal leading-relaxed font-sans">プリミティブなユーティリティの固定されたセットから複雑なコンポーネントを構築します。</p>
    </div>
    <div id="app"></div>
    <?= $this->Mix->htmlScript('app'); ?>
</body>

</html>
