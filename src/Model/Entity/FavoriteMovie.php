<?php
namespace App\Model\Entity;

use Cake\ORM\Entity;

class FavoriteMovie extends Entity
{
    protected $_accessible = [
        'movie_id' => true,
        'title' => true,
        'created' => true,
        'modified' => true,
    ];
}