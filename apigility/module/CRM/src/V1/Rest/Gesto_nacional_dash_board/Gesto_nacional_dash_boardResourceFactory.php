<?php
namespace CRM\V1\Rest\Gesto_nacional_dash_board;

class Gesto_nacional_dash_boardResourceFactory
{
    public function __invoke($services)
    {
        return new Gesto_nacional_dash_boardResource();
    }
}
