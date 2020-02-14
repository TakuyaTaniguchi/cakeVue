<p>このデータを削除しますか？</p>
id:<?= $entity['id'];?>
title:<?= $entity['title'];?>
body:<?= $entity['body'];?>

<?=$this->Form->create($entity,
    ['type'=>'post',
    'url'=>['controller'=>'Articles',
        'action'=>'destroy']])?>
<?=$this->Form->hidden('Articles.id');?>
<div><?=$this->Form->submit('削除する');?></div>
<?=$this->Form->end();?>
